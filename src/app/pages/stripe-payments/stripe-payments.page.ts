import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as  moment from 'moment';
import swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-stripe-payments',
  templateUrl: './stripe-payments.page.html',
  styleUrls: ['./stripe-payments.page.scss'],
})
export class StripePaymentsPage implements OnInit {
  cid: any;
  cards: any[] = [];
  card_token: any;
  totalPrice: any = 0;
  totalItem: any = 0;
  serviceTax: any = 0;
  deliveryCharge: any = 0;
  grandTotal: any = 0;
  deliveryAddress: any;
  venueFCM: any = '';
  vid: any = '';
  payKey: any = '';
  coupon: any;
  dicount: any;

  constructor(
    private router: Router,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
  ) { }

  getCards() {
    this.api.httpGet('https://api.stripe.com/v1/customers/' + this.cid + '/sources?object=card').subscribe((cards: any) => {
      this.util.hide();
      if (cards && cards.data) {
        this.cards = cards.data;
        this.card_token = this.cards[0].id;
      }
    }, (error) => {
      this.util.hide();
      console.log(error);
      this.util.hide();
      if (error && error.error && error.error.error && error.error.error.message) {
        this.util.showErrorAlert(error.error.error.message);
        return false;
      }
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  getProfile() {
    this.util.show();
    this.api.getProfile(localStorage.getItem('uid')).then((data: any) => {
      if (data && data.cid) {
        this.cid = data.cid;
        this.getCards();
      } else {
        this.util.hide();
      }
    }, error => {
      console.log(error);
      this.util.hide();
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.util.hide();
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }


  async ngOnInit() {
    const foods = await JSON.parse(localStorage.getItem('foods'));
    let recheck = await foods.filter(x => x.quantiy > 0);
    const add = JSON.parse(localStorage.getItem('deliveryAddress'));
    this.vid = localStorage.getItem('vid');
    this.api.getVenueUser(this.vid).then((data) => {
      if (data && data.fcm_token) {
        this.venueFCM = data.fcm_token;
      }
    }, error => {
      this.util.errorToast(this.util.translate('Something went wrong'));
      this.router.navigate(['tabs']);
    }).catch(error => {
      this.util.errorToast(this.util.translate('Something went wrong'));
      this.router.navigate(['tabs']);
      console.log(error);
    });
    if (add && add.address) {
      this.deliveryAddress = add;
    }
    this.coupon = JSON.parse(localStorage.getItem('coupon'));
    this.calculate(recheck);
  }

  async calculate(foods) {
    let item = foods.filter(x => x.quantiy > 0);
    this.totalPrice = 0;
    this.totalItem = 0;
    await item.forEach(element => {
      this.totalItem = this.totalItem + element.quantiy;
      this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
    });
    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
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
        this.grandTotal = this.grandTotal.toFixed(2);
      } else {
        const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
        this.dicount = this.coupon.discout;
        this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
        this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
        this.grandTotal = this.grandTotal.toFixed(2);
      }
    } else {
      this.coupon = null;
      localStorage.removeItem('coupon');
    }
  }

  payment() {
    swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
      icon: 'question',
      confirmButtonText: this.util.translate('Yes'),
      cancelButtonText: this.util.translate('cancel'),
      showCancelButton: true,
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
        const options = {
          amount: parseInt(this.grandTotal) * 100,
          currency: 'inr',
          customer: this.cid,
          card: this.card_token,
        };
        const url = 'https://api.stripe.com/v1/charges';
        this.util.show();
        this.api.httpPost(url, options).subscribe((data: any) => {
          this.payKey = data.id;
          this.util.hide();
          this.util.showToast(this.util.translate('Payment Success'), 'success', 'bottom');
          this.createOrder();
        }, (error) => {
          this.util.hide();
          console.log(error);
          this.util.hide();
          if (error && error.error && error.error.error && error.error.error.message) {
            this.util.showErrorAlert(error.error.error.message);
            return false;
          }
          this.util.errorToast('Something went wrong');
        });
      }
    });
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371;
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }
  async createOrder() {
    this.util.show('creating order');
    this.api.checkAuth().then(async (data: any) => {
      if (data) {
        // not from saved address then create new and save
        if (!this.deliveryAddress.id || this.deliveryAddress.id === '') {
          const addressId = this.util.makeid(10);
          const newAddress = {
            id: addressId,
            uid: data.uid,
            address: this.deliveryAddress.address,
            lat: this.deliveryAddress.lat,
            lng: this.deliveryAddress.lng,
            title: 'home',
            house: '',
            landmark: ''
          };
          await this.api.addNewAddress(data.uid, addressId, newAddress).then((data) => {
            this.deliveryAddress.id = addressId;
          }, error => {
            console.log(error);
          }).catch(error => {
            console.log(error);
          });
        }
        const foods = await JSON.parse(localStorage.getItem('foods'));
        let recheck = await foods.filter(x => x.quantiy > 0);
        let id = this.util.makeid(10);
        await localStorage.removeItem('foods');
        await localStorage.removeItem('vid');
        await localStorage.removeItem('totalItem');
        const uid = localStorage.getItem('uid');
        const lng = localStorage.getItem('language');
        const selectedCity = localStorage.getItem('selectedCity');
        await localStorage.clear();
        localStorage.setItem('uid', uid);
        localStorage.setItem('language', lng);
        localStorage.setItem('selectedCity', selectedCity);
        const param = {
          uid: data.uid,
          userId: data.uid,
          orderId: id,
          vid: this.vid,
          order: JSON.stringify(recheck),
          time: moment().format('llll'),
          address: this.deliveryAddress,
          total: this.totalPrice,
          grandTotal: this.grandTotal,
          serviceTax: this.serviceTax,
          deliveryCharge: this.deliveryCharge,
          status: 'created',
          restId: this.vid,
          paid: 'stripe',
          paykey: this.payKey,
          appliedCoupon: this.coupon ? true : false,
          couponId: this.coupon ? this.coupon.id : 'NA',
          coupon: this.coupon ? JSON.stringify(this.coupon) : 'NA',
          dicount: this.coupon ? this.dicount : 0
        };
        this.api.createOrder(id, param).then(async (data) => {
          this.util.hide();
          if (this.venueFCM && this.venueFCM !== '') {
            this.api.sendNotification(this.util.translate('New Order Received'),
              this.util.translate('New Order'), this.venueFCM).subscribe((data) => {
                console.log('send notifications', data);
              }, error => {
                console.log(error);
              });
          }
          swal.fire({
            title: this.util.translate('Success'),
            text: this.util.translate('Your is created succesfully'),
            icon: 'success',
            backdrop: false,
          });
          this.navCtrl.navigateRoot(['tabs/tab2']);
        }, error => {
          this.util.hide();
          this.util.errorToast(this.util.translate('Something went wrong'));
          this.router.navigate(['tabs']);
        }).catch(error => {
          this.util.hide();
          this.util.errorToast(this.util.translate('Something went wrong'));
          this.router.navigate(['tabs']);
          console.log(error);
        });
      } else {
        this.util.hide();
        this.util.errorToast(this.util.translate('Session expired'));
        this.router.navigate(['login']);
      }

    }, error => {
      this.util.hide();
      this.util.errorToast(this.util.translate('Session expired'));
      this.router.navigate(['login']);
    }).catch(error => {
      this.util.hide();
      this.util.errorToast(this.util.translate('Session expired'));
      this.router.navigate(['login']);
      console.log(error);
    });

  }

  ionViewWillEnter() {
    this.getProfile();
  }

  onAdd() {
    this.router.navigate(['add-card']);
  }
  changeMethod(id) {
    this.card_token = id;
  }
}
