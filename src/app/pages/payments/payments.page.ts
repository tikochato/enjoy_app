import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

import * as  moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  totalPrice: any = 0;
  totalItem: any = 0;
  serviceTax: any = 0;
  deliveryCharge: any = 0;
  minimumPurchase: any = 0;
  minimumPurchaseCharge: any = 0;
  isUnderMinimum: boolean;
  grandTotal: any = 0;
  deliveryAddress: any;
  venueFCM: any = '';
  vid: any = '';
  coupon: any;
  dicount: any;
  payKey: any = '';
  constructor(
    private router: Router,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private payPal: PayPal
  ) { }

  async ngOnInit() {
    const foods = await JSON.parse(localStorage.getItem('foods'));
    let recheck = await foods.filter(x => x.quantiy > 0);
    const add = JSON.parse(localStorage.getItem('deliveryAddress'));
    this.vid = localStorage.getItem('vid');
    this.isUnderMinimum = false;
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
    });
    if (add && add.address) {
      this.deliveryAddress = add;
    }
    this.coupon = JSON.parse(localStorage.getItem('coupon'));
    this.deliveryCharge = localStorage.getItem('deliveryCharge');
    this.minimumPurchase = localStorage.getItem('minimumPurchase');
    this.minimumPurchaseCharge = localStorage.getItem('minimumPurchaseCharge');
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
    this.isUnderMinimum = parseFloat(this.grandTotal) < parseFloat(this.minimumPurchase);
    if (this.isUnderMinimum) {
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
        if (this.isUnderMinimum) {
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
        if (this.isUnderMinimum) {
          this.grandTotal += parseFloat(this.minimumPurchaseCharge);
        }
        this.grandTotal = this.grandTotal.toFixed(2);
      }
    } else {
      this.coupon = null;
      localStorage.removeItem('coupon');
    }
  }

  placeOrder() {
    swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
      icon: 'question',
      showCancelButton: true,
      backdrop: false,
      background: 'white',
      confirmButtonText: this.util.translate('Yes'),
      cancelButtonText: this.util.translate('Cancel'),
    }).then((data) => {
      if (data && data.value) {
        this.createOrder();
      }
    });
  }

  // For Testing Generate Credit Card American Express
  // https://developer.paypal.com/developer/creditCardGenerator/
  payWithPaypal() {
    swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
      icon: 'question',
      showCancelButton: true,
      backdrop: false,
      background: 'white',
      confirmButtonText: this.util.translate('Yes'),
      cancelButtonText: this.util.translate('cancel'),
    }).then((data) => {
      if (data && data.value) {
        this.payPal.init({
          PayPalEnvironmentProduction: environment.paypal.production,
          PayPalEnvironmentSandbox: environment.paypal.sandbox
        }).then(() => {
          this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          })).then(() => {
            const payment = new PayPalPayment(this.grandTotal, 'USD', 'Food Delivery', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then((res) => {
              this.payKey = res.response.id;
              this.paypalOrder();
            }, (error: any) => {
              console.log('error', error);
              this.util.showToast(error, 'danger', 'bottom');
              // Error or render dialog closed without being successful
            });
          }, (error: any) => {
            console.log('error', error);
            this.util.showToast(error, 'danger', 'bottom');
            // Error in configuration
          });
        }, (error: any) => {
          console.log('error', error);
          this.util.showToast(error, 'danger', 'bottom');
          // Error in initialization, maybe PayPal isn't supported or something else
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
    this.util.show(this.util.translate('Creating order'));
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
        const deliveryCharge = localStorage.getItem('deliveryCharge');
        const minimumPurchaseCharge = localStorage.getItem('minimumPurchaseCharge');
        await localStorage.removeItem('deliveryCharge');
        await localStorage.removeItem('minimumPurchase');
        await localStorage.removeItem('minimumPurchaseCharge');
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
          deliveryCharge: deliveryCharge,
          minimumPurchaseCharge: this.isUnderMinimum ? minimumPurchaseCharge : 0,
          status: 'created',
          restId: this.vid,
          // driverId: this.drivers[0].uid,
          // dId: this.drivers[0].uid,
          paid: 'cod',
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

  async paypalOrder() {
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
        await localStorage.removeItem('deliveryCharge');
        await localStorage.removeItem('minimumPurchase');
        await localStorage.removeItem('minimumPurchaseCharge');
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
          minimumPurchaseCharge: this.isUnderMinimum ? this.minimumPurchaseCharge : 0,
          status: 'created',
          restId: this.vid,
          paid: 'paypal',
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

  openStripe() {
    this.router.navigate(['stripe-payments']);
  }
}
