import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rest-details',
  templateUrl: './rest-details.page.html',
  styleUrls: ['./rest-details.page.scss'],
})
export class RestDetailsPage implements OnInit {
  slideOpts = {
    slidesPerView: 2.3,
  };
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
  veg: boolean = true;
  totalItem: any = 0;
  totalPrice: any = 0;
  deliveryAddress: any = '';
  images: any[] = [];
  isOpen: boolean = false;
  open: any;
  close: any;
  email: any;
  phone: any;
  constructor(
    private route: ActivatedRoute,
    private api: ApisService,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      if (data.hasOwnProperty('id')) {
        this.id = data.id;
        this.getVenueDetails();
      }
    });
  }

  getVenueDetails() {

    // Venue Details
    this.api.getVenueDetails(this.id).then(data => {
      console.log(data);
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
        this.totalRating = restaurant.totalRating ? restaurant.totalRating : 2;
        this.dishPrice = restaurant.dishPrice;
        this.open = restaurant.openTime;
        this.close = restaurant.closeTime;
        this.email = restaurant.email;
        this.phone = restaurant.phone;
        this.time = restaurant.time;
        this.cusine = restaurant.cusine;
        this.images = restaurant.images;
        this.isOpen = restaurant.isOpen;
        this.images.forEach((element, i) => {
          if (element === '' || !element) {
            this.images[i] = 'assets/imgs/food.jpg';
          }
        });
      }
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.util.errorToast(this.util.translate('Something went wrong'));
    });
  }

}
