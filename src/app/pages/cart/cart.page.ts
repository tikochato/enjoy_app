import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  haveItems: boolean = false;
  vid: any = '';
  foods: any;
  name: any;
  descritions: any;
  cover: any;
  address: any;
  time: any;
  totalPrice: any = 0;
  totalItem: any = 0;
  serviceTax: any = 0;
  deliveryCharge: any = 0;
  minimumPurchase: any = 0;
  minimumPurchaseCharge: any = 0;
  isUnderMinimum: boolean;
  grandTotal: any = 0;
  deliveryAddress: any = '';
  totalRating: any = 0;
  coupon: any;
  dicount: any;

  constructor(
    private api: ApisService,
    private router: Router,
    private util: UtilService,
    private navCtrl: NavController,
    private chMod: ChangeDetectorRef
  ) {
    this.util.getCouponObservable().subscribe(data => {
      if (data) {
        this.coupon = data;
        localStorage.setItem('coupon', JSON.stringify(data));
        this.calculate();
      }
    });
  }

  ngOnInit() {
  }

  getAddress() {
    const add = JSON.parse(localStorage.getItem('deliveryAddress'));
    if (add && add.address) {
      this.deliveryAddress = add.address;
    }
    return this.deliveryAddress;
  }

  getVenueDetails() {
    // Venue Details
    return this.api.getVenueDetails(this.vid).then(data => {
      if (data) {
        this.name = data.name;
        this.descritions = data.descritions;
        this.cover = data.cover;
        this.address = data.address;
        this.time = data.time;
        this.totalRating = data.totalRating;
        this.deliveryCharge = data.deliveryCharge;
        this.minimumPurchase = data.minimumPurchase;
        this.minimumPurchaseCharge = data.minimumPurchaseCharge;
        localStorage.setItem('minimumPurchase', this.minimumPurchase);
        localStorage.setItem('minimumPurchaseCharge', this.minimumPurchaseCharge);
        localStorage.setItem('deliveryCharge', this.deliveryCharge);
        localStorage.setItem('restaurantLat', data.lat);
        localStorage.setItem('restaurantLng', data.lng);
      }
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  validate() {
    this.api.checkAuth().then(async (user) => {
      if (user) {
        const id = await localStorage.getItem('vid');
        if (id) {
          this.vid = id;
          await this.getVenueDetails();
          const foods = await localStorage.getItem('foods');
          if (foods) {
            this.foods = await JSON.parse(foods);
            let recheck = await this.foods.filter(x => x.quantiy > 0);
            if (this.vid && this.foods && recheck.length > 0) {
              this.haveItems = true;
              this.calculate();
              this.chMod.detectChanges();
            }
          }
        } else {
          this.haveItems = false;
          this.chMod.detectChanges();
        }
        this.chMod.detectChanges();
        return true;
      } else {
        this.router.navigate(['login']);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  ionViewWillEnter() {
    this.validate();
    this.isUnderMinimum = false;
  }

  getCart() {
    this.navCtrl.navigateRoot(['tabs/tab1']);
  }

  addQ(index) {
    this.foods[index].quantiy = this.foods[index].quantiy + 1;
    localStorage.setItem('foods', JSON.stringify(this.foods));
    this.calculate();
  }

  removeQ(index) {
    if (this.foods[index].quantiy != 0) {
      this.foods[index].quantiy = this.foods[index].quantiy - 1;
    } else {
      this.foods[index].quantiy = 0;
    }
    localStorage.setItem('foods', JSON.stringify(this.foods));
    this.calculate();
  }

  async calculate() {
    let item = this.foods.filter(x => x.quantiy > 0);
    this.totalPrice = 0;
    this.totalItem = 0;
    await item.forEach(element => {
      this.totalItem = this.totalItem + element.quantiy;
      this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
    });
    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
    this.isUnderMinimum = parseFloat(this.grandTotal) < parseFloat(this.minimumPurchase);
    if (this.isUnderMinimum){
      this.grandTotal += parseFloat(this.minimumPurchaseCharge);
    }
    this.grandTotal = this.grandTotal.toFixed(2);
    if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
      if (this.coupon.type === '%') {
        function percentage(totalValue, partialValue) {
          return (100 * partialValue) / totalValue;
        }
        const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
        this.dicount = totalPrice.toFixed(2);
        this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        this.isUnderMinimum = parseFloat(this.grandTotal) < parseFloat(this.minimumPurchase);
        if (this.isUnderMinimum){
          this.grandTotal += parseFloat(this.minimumPurchaseCharge);
        }
        this.grandTotal = this.grandTotal.toFixed(2);
      } else {
        const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
        this.dicount = this.coupon.discout;
        this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        this.isUnderMinimum = parseFloat(this.grandTotal) < parseFloat(this.minimumPurchase);
        if (this.isUnderMinimum){
          this.grandTotal += parseFloat(this.minimumPurchaseCharge);
        }
        this.grandTotal = this.grandTotal.toFixed(2);
      }
    } else {
      this.coupon = null;
      localStorage.removeItem('coupon');
    }
    if (this.totalItem === 0) {
      const lng = localStorage.getItem('language');
      const selectedCity = localStorage.getItem('selectedCity');
      await localStorage.clear();
      localStorage.setItem('language', lng);
      localStorage.setItem('selectedCity', selectedCity);
      this.totalItem = 0;
      this.totalPrice = 0;
      this.haveItems = false;
    }
  }

  changeAddress() {
    const navData: NavigationExtras = {
      queryParams: {
        from: 'cart'
      }
    };
    this.router.navigate(['choose-address'], navData);
  }

  checkout() {
    const navData: NavigationExtras = {
      queryParams: {
        from: 'cart'
      }
    };
    this.router.navigate(['choose-address'], navData);
    // this.router.navigate(['payments']);
  }

  openCoupon() {
    const navData: NavigationExtras = {
      queryParams: {
        restId: this.vid,
        name: this.name,
        totalPrice: this.totalPrice
      }
    };
    this.router.navigate(['coupons'], navData);
  }
}
