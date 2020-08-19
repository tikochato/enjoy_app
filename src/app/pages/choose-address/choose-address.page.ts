import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.page.html',
  styleUrls: ['./choose-address.page.scss'],
})
export class ChooseAddressPage implements OnInit {
  id: any;
  myaddress: any[] = [];
  from: any;
  selectedAddress: any;
  dummy = Array(10);
  isValidAddress: boolean;
  constructor(
    private router: Router,
    private api: ApisService,
    private util: UtilService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private popoverController: PopoverController
  ) {

  }

  ngOnInit() {
    this.isValidAddress = false;
    this.route.queryParams.subscribe(data => {
      if (data && data.from) {
        this.from = data.from;
      }
    });
  }

  getAddress() {
    this.api.getMyAddress(this.id).then((data) => {
      this.dummy = [];
      if (data && data.length) {
        this.myaddress = data;
      }
    }, error => {
      console.log(error);
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }

  getProfile() {
    this.util.show();
    this.api.getProfile(localStorage.getItem('uid')).then((data: any) => {
      this.util.hide();
      if (!data || !data.phone) {
        this.util.errorToast(this.util.translate('All Fields are required'));
        const navData: NavigationExtras = {
          queryParams: {
            from: 'choose-address'
          }
        };
        this.router.navigate(['/edit-profile'], navData);
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

  ionViewWillEnter() {
    this.isValidAddress = false;
    this.api.checkAuth().then((data: any) => {
      if (data) {
        this.id = data.uid;
        this.getProfile();
        this.getAddress();
      }
    });
  }

  addNew() {
    this.router.navigate(['add-new-address']);
  }

  checkAddress(addressId) {
    if (addressId) {
      const restaurantLat = localStorage.getItem('restaurantLat');
      const restaurantLng = localStorage.getItem('restaurantLng');
      const myAddress = this.myaddress.filter(x => x.id === addressId);
      const distance = this.util.distanceInKmBetweenEarthCoordinates(restaurantLat, restaurantLng, myAddress[0].lat, myAddress[0].lng);
      // Distance
      if (distance < 10) {
        this.isValidAddress = true;
      } else {
        Swal.fire({
          title: this.util.translate('out of coverage area'),
          text: this.util.translate('address not valid'),
          icon: 'error',
          showCancelButton: false,
          backdrop: false,
          background: 'white',
          confirmButtonText: this.util.translate('Yes')
        }).then((data) => {
          this.isValidAddress = false;
        });
      }
    }
  }

  selectAddress() {
    if (this.from === 'cart') {
      const selecte = this.myaddress.filter(x => x.id === this.selectedAddress);
      const item = selecte[0];
      const address = {
        address: item.house + ' ' + item.landmark + ' ' + item.address,
        lat: item.lat,
        lng: item.lng,
        id: item.id
      };
      localStorage.setItem('deliveryAddress', JSON.stringify(address));
      // this.util.showToast('Address changed', 'success', 'bottom');
      // this.navCtrl.back();

      this.router.navigate(['payments']);
    }
  }

  async openMenu(item, events) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: events,
      mode: 'ios',
    });
    popover.onDidDismiss().then(data => {
      if (data && data.data) {
        if (data.data === 'edit') {
          const navData: NavigationExtras = {
            queryParams: {
              from: 'edit',
              data: JSON.stringify(item)
            }
          };
          this.router.navigate(['add-new-address'], navData);
        } else if (data.data === 'delete') {
          Swal.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('to delete this address'),
            icon: 'question',
            confirmButtonText: this.util.translate('Yes'),
            backdrop: false,
            background: 'white',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: this.util.translate('Cancel')
          }).then(data => {
            if (data && data.value) {
              this.util.show();
              this.api.deleteAddress(localStorage.getItem('uid'), item.id).then(data => {
                this.util.hide();
                this.getAddress();
              }).catch(error => {
                console.log(error);
                this.util.hide();
              });
            }
          });

        }
      }
    });
    await popover.present();
  }
}
