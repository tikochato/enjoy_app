import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.page.html',
  styleUrls: ['./add-new-address.page.scss'],
})
export class AddNewAddressPage implements OnInit {
  @ViewChild('map', { static: true }) mapEle: ElementRef;
  map: any;
  marker: any;
  lat: any;
  lng: any;
  address: any;
  house: any = '';
  landmark: any = '';
  title: any = 'home';
  id: any;
  from: any;

  constructor(
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private diagnostic: Diagnostic,
    public geolocation: Geolocation,
    private navCtrl: NavController,
    private api: ApisService,
    private util: UtilService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(data => {
      if (data && data.from) {
        this.from = 'edit';
        const info = JSON.parse(data.data);
        this.address = info.address;
        this.house = info.house;
        this.id = info.id;
        this.landmark = info.landmark;
        this.lat = info.lat;
        this.lng = info.lng;
        this.loadmap(this.lat, this.lng, this.mapEle);
      } else {
        this.from = 'new';
        this.getLocation();
      }
    });
  }

  ngOnInit() {
  }

  getLocation() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
        );
        this.grantRequest();
      } else if (this.platform.is('ios')) {
        this.grantRequest();
      } else {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
          if (resp) {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
            this.getAddress(this.lat, this.lng);
          }
        });
      }
    });
  }

  grantRequest() {
    this.diagnostic.isLocationEnabled().then((data) => {
      if (data) {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
          if (resp) {
            this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
            this.getAddress(resp.coords.latitude, resp.coords.longitude);
          }
        });
      } else {
        this.diagnostic.switchToLocationSettings();
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
          if (resp) {
            this.loadmap(resp.coords.latitude, resp.coords.longitude, this.mapEle);
            this.getAddress(resp.coords.latitude, resp.coords.longitude);
          }
        });
      }
    }, error => {
      // console.log('errir', error);
    }).catch(error => {
      // console.log('error', error);
    });

  }

  loadmap(lat, lng, mapElement) {
    const location = new google.maps.LatLng(lat, lng);
    const style = [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          { saturation: -100 }
        ]
      }
    ];

    const mapOptions = {
      zoom: 15,
      scaleControl: true,
      streetViewControl: false,
      zoomControl: true,
      overviewMapControl: true,
      center: location,
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
      }
    };
    this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
    var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
    this.map.mapTypes.set('Foodfire5', mapType);
    this.map.setMapTypeId('Foodfire5');
    this.addMarker(location);

    this.addLocationButton(this.map, this.marker);
  }

  getAddress(lat, lng) {
    const geocoder = new google.maps.Geocoder();
    const location = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ 'location': location }, (results, status) => {
      this.address = results[0].formatted_address;
      this.lat = lat;
      this.lng = lng;
    });
  }

  addMarker(location) {
    const icon = {
      url: 'assets/icon/marker.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
    }
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: true,
      animation: google.maps.Animation.DROP
    })

    google.maps.event.addListener(this.marker, 'dragend', () => {
      this.getDragAddress(this.marker);
    });

  }

  getDragAddress(event) {

    const geocoder = new google.maps.Geocoder();
    const location = new google.maps.LatLng(event.position.lat(), event.position.lng());
    geocoder.geocode({ 'location': location }, (results, status) => {
      this.address = results[0].formatted_address;
      this.lat = event.position.lat();
      this.lng = event.position.lng();
    });
  }
  submit() {
    localStorage.setItem('newAddress', this.address);
    localStorage.setItem('newLng', this.lng);
    localStorage.setItem('newLat', this.lat);
    this.navCtrl.back();
  }
  addAddress() {
    if (this.address === '' || this.landmark === '' || this.house === '') {
      this.util.errorToast(this.util.translate('All Fields are required'));
      return false;
    }
    this.util.show();
    this.api.checkAuth().then((data: any) => {
      if (data) {
        const id = this.util.makeid(10);
        const param = {
          id: id,
          uid: data.uid,
          address: this.address,
          lat: this.lat,
          lng: this.lng,
          title: this.title,
          house: this.house,
          landmark: this.landmark
        };
        this.api.addNewAddress(data.uid, id, param).then((data) => {
          this.util.hide();
          this.util.showToast(this.util.translate('succesfully added address'), 'success', 'bottom');
          this.navCtrl.back();
        }, error => {
          this.util.hide();
          console.log(error);
          this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
          this.util.hide();
          console.log(error);
          this.util.errorToast(this.util.translate('Something went wrong'));
        });
      } else {
        this.util.hide();
        this.util.errorToast(this.util.translate('Something went wrong'));
        this.navCtrl.navigateRoot(['tabs']);
      }
    }, error => {
      this.util.hide();
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
      this.navCtrl.navigateRoot(['tabs']);
    }).catch(error => {
      this.util.hide();
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
      this.navCtrl.navigateRoot(['tabs']);
    });
  }

  updateAddress() {
    if (this.address === '' || this.landmark === '' || this.house === '') {
      this.util.errorToast(this.util.translate('All Fields are required'));
      return false;
    }
    const param = {
      id: this.id,
      uid: localStorage.getItem('uid'),
      address: this.address,
      lat: this.lat,
      lng: this.lng,
      title: this.title,
      house: this.house,
      landmark: this.landmark
    };
    this.util.show();
    this.api.updateAddress(localStorage.getItem('uid'), this.id, param).then((data) => {
      this.util.hide();
      this.util.showToast('Address updated', 'success', 'bottom');
      this.navCtrl.back();
    }).catch(error => {
      this.util.hide();
      console.log('error', error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

  addLocationButton(map, marker) {
    var controlDiv = document.createElement('div');

    var firstChild = document.createElement('button');
    firstChild.style.backgroundColor = '#fff';
    firstChild.style.border = 'none';
    firstChild.style.outline = 'none';
    firstChild.style.width = '28px';
    firstChild.style.height = '28px';
    firstChild.style.borderRadius = '2px';
    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    firstChild.style.cursor = 'pointer';
    firstChild.style.marginRight = '10px';
    firstChild.style.padding = '0px';
    firstChild.title = 'Your Location';
    controlDiv.appendChild(firstChild);

    var secondChild = document.createElement('div');
    secondChild.style.margin = '5px';
    secondChild.style.width = '18px';
    secondChild.style.height = '18px';
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    secondChild.style.backgroundSize = '180px 18px';
    secondChild.style.backgroundPosition = '0px 0px';
    secondChild.style.backgroundRepeat = 'no-repeat';
    secondChild.id = 'you_location_img';
    firstChild.appendChild(secondChild);

    firstChild.addEventListener('click', function () {
      var imgX = '0';
      var animationInterval = setInterval(function () {
        if (imgX == '-18') imgX = '0';
        else imgX = '-18';
      }, 500);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          marker.setPosition(latlng);
          map.setCenter(latlng);
          clearInterval(animationInterval);
        });
      }
      else {
        clearInterval(animationInterval);
      }
    });

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
  }
}
