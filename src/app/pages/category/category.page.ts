import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController, PopoverController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import * as moment from 'moment';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  id: any;
  name: any;
  descritions: any;
  cover: any = '';
  address: any;
  rating: any;
  time: any;
  totalRating: any;
  dishPrice: any;
  cusine: any[] = [];
  foods: any[] = [];
  dummyFoods: any[] = [];
  categories: any[] = [];
  dummy = Array(50);
  totalItem: any = 0;
  totalPrice: any = 0;
  deliveryAddress: any = '';
  isOpen: boolean = false;
  open: any;
  close: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private router: Router,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      if (data.hasOwnProperty('id')) {
        this.id = data.id;
        this.getVenueDetails();
      }
    });
  }

  getAddress() {
    const address = JSON.parse(localStorage.getItem('deliveryAddress'));
    if (address && address.address) {
      this.deliveryAddress = address.address;
    }
    return this.deliveryAddress;
  }

  getVenueDetails() {
    // Venue Details
    this.api.getVenueDetails(this.id).then(data => {
      if (data) {
        // is open
        const restaurant = { ...data };
        const openTime = moment(restaurant.openTime, 'HH:mm');
        const closeTime = moment(restaurant.closeTime, 'HH:mm');
        const now = moment(new Date(), 'HH:mm')
        restaurant.isOpen = now.isBetween(openTime, closeTime);

        this.name = restaurant.name;
        this.descritions = restaurant.descritions;
        this.cover = restaurant.cover;
        this.address = restaurant.address;
        this.rating = restaurant.rating ? restaurant.rating : 0;
        this.totalRating = restaurant.totalRating ? restaurant.totalRating : 0;
        this.dishPrice = restaurant.dishPrice;
        this.time = restaurant.time;
        this.cusine = restaurant.cusine;
        this.open = restaurant.openTime;
        this.close = restaurant.closeTime;
        this.isOpen = restaurant.isOpen;

        const vid = localStorage.getItem('vid');
        if (vid && vid !== this.id) {
          this.getCates();
          this.getFoods();
          this.totalItem = parseInt(localStorage.getItem('totalItem'));
          this.totalPrice = parseFloat(localStorage.getItem('totalPrice'));
          this.presentAlertConfirm();
          return false;
        } else if (vid && vid === this.id) {
          this.categories = JSON.parse(localStorage.getItem('categories'));
          this.foods = JSON.parse(localStorage.getItem('foods'));
          this.dummyFoods = JSON.parse(localStorage.getItem('dummyItem'));
          this.calculate();
        } else {
          this.getCates();
          this.getFoods();
        }

      }
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getCates() {
    this.api.getVenueCategories(this.id).then(cate => {
      if (cate) {
        this.categories = cate;
      }
    }, error => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getFoods() {
    this.api.getFoods(this.id).then(foods => {
      if (foods) {
        // if()
        this.dummy = [];
        this.foods = [];
        this.dummyFoods = [];
        foods.forEach(element => {
          if (element && element.status === true) {
            let info = {
              cid: {
                id: element.cid.id,
              },
              cover: element.cover,
              desc: element.desc,
              id: element.id,
              name: element && element.variation ? element.name + ' (Regular)' : element.name,
              price: element.price,
              rating: element.rating,
              uid: element.uid,
              quantiy: 0,
              totalRating: element.totalRating ? element.totalRating : 0
            };
            this.foods.push(info);
            this.dummyFoods.push(info);
            if (element && element.variation && element.small && element.small > 0) {
              let info = {
                cid: {
                  id: element.cid.id,
                },
                cover: element.cover,
                desc: element.desc,
                id: element.id,
                name: element.name + ' (small)',
                price: element.small,
                rating: element.rating,
                uid: element.uid,
                quantiy: 0,
                totalRating: element.totalRating ? element.totalRating : 0
              };
              this.foods.push(info);
              this.dummyFoods.push(info);
            }

            if (element && element.variation && element.medium && element.medium > 0) {
              let info = {
                cid: {
                  id: element.cid.id,
                },
                cover: element.cover,
                desc: element.desc,
                id: element.id,
                name: element.name + ' (medium)',
                price: element.medium,
                rating: element.rating,
                uid: element.uid,
                quantiy: 0,
                totalRating: element.totalRating ? element.totalRating : 0
              };
              this.foods.push(info);
              this.dummyFoods.push(info);
            }

            if (element && element.variation && element.large && element.large > 0) {
              let info = {
                cid: {
                  id: element.cid.id,
                },
                cover: element.cover,
                desc: element.desc,
                id: element.id,
                name: element.name + ' (large)',
                price: element.large,
                rating: element.rating,
                uid: element.uid,
                quantiy: 0,
                totalRating: element.totalRating ? element.totalRating : 0
              };
              this.foods.push(info);
              this.dummyFoods.push(info);
            }
          }
        });
        if (!this.foods.length || this.foods.length === 0) {
          this.util.errorToast(this.util.translate('No Foods found'));
          this.navCtrl.back();
          return false;
        }
      }
    }, error => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  back() {
    this.navCtrl.navigateRoot(['tabs']);
  }

  getCusine(cusine) {
    return cusine.join('-');
  }
  add(index) {
    this.api.checkAuth().then((user) => {
      if (user) {
        const vid = localStorage.getItem('vid');
        if (vid && vid !== this.id) {
          this.presentAlertConfirm();
          return false;
        }
        this.foods[index].quantiy = 1;
        this.calculate();
      } else {
        this.router.navigate(['login']);
      }
    }).catch(error => {
      console.log(error);
    });


  }

  calculate() {
    this.dummy = [];
    let item = this.foods.filter(x => x.quantiy > 0);
    this.totalPrice = 0;
    this.totalItem = 0;
    item.forEach(element => {
      this.totalItem = this.totalItem + element.quantiy;
      this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
    });
    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    if (this.totalItem === 0) {
      this.totalItem = 0;
      this.totalPrice = 0;
    }
  }

  async setData() {
    const vid = localStorage.getItem('vid');

    if (vid && vid === this.id && this.totalPrice > 0) {
      localStorage.setItem('vid', this.id);
      await localStorage.setItem('foods', JSON.stringify(this.foods));
      localStorage.setItem('categories', JSON.stringify(this.categories));
      localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
      localStorage.setItem('totalItem', this.totalItem);
      localStorage.setItem('totalPrice', this.totalPrice);
    } else if (!vid && this.totalItem > 0) {
      localStorage.setItem('vid', this.id);
      await localStorage.setItem('foods', JSON.stringify(this.foods));
      localStorage.setItem('categories', JSON.stringify(this.categories));
      localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
      localStorage.setItem('totalItem', this.totalItem);
      localStorage.setItem('totalPrice', this.totalPrice);
    } else if (this.totalItem == 0) {
      this.totalItem = 0;
      this.totalPrice = 0;
    }
  }
  async  ionViewWillLeave() {
    await this.setData();
  }
  
  addQ(index) {
    this.foods[index].quantiy = this.foods[index].quantiy + 1;
    this.calculate();
  }
  removeQ(index) {
    if (this.foods[index].quantiy !== 0) {
      this.foods[index].quantiy = this.foods[index].quantiy - 1;
    } else {
      this.foods[index].quantiy = 0;
    }
    this.calculate();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: this.util.translate('Warning'),
      message: this.util.translate(`you already have item's in cart with different restaurant`),
      buttons: [
        {
          text: this.util.translate('Cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: this.util.translate('Clear cart'),
          handler: () => {
            localStorage.removeItem('vid');
            localStorage.removeItem('categories');
            localStorage.removeItem('dummyItem');
            localStorage.removeItem('foods');
            this.totalItem = 0;
            this.totalPrice = 0;
          }
        }
      ]
    });

    await alert.present();
  }

  viewCart() {
    this.setData();
    this.navCtrl.navigateRoot(['tabs/tab3']);
  }

  async presentPopover(ev: any) {
    if (this.categories.length <= 0) {
      return false;
    }
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event: ev,
      componentProps: { data: this.categories },
      mode: 'ios',
    });
    popover.onDidDismiss().then(data => {
      if (data && data.data) {
        const yOffset = document.getElementById(data.data.id).offsetTop;
        const yHOffset = document.getElementById(data.data.id).offsetHeight;

        this.content.scrollToPoint(0, yOffset, 1000);
      }
    });
    await popover.present();

  }

  openDetails() {
    const navData: NavigationExtras = {
      queryParams: {
        id: this.id
      }
    };
    this.router.navigate(['rest-details'], navData);
  }
}
