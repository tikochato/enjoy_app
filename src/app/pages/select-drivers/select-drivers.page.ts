import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-drivers',
  templateUrl: './select-drivers.page.html',
  styleUrls: ['./select-drivers.page.scss'],
})
export class SelectDriversPage implements OnInit {
  drivers: any[] = [];
  selectedDriver: any = '';
  constructor(
    private navParam: NavParams,
    private modalController: ModalController
  ) {
    this.drivers = this.navParam.get('item');
    if (this.drivers.length && this.drivers.length > 0) {
      this.selectedDriver = this.drivers[0].id;
    }
  }

  ngOnInit() {
  }
  select() {
    let driver = this.drivers.filter(x => x.id === this.selectedDriver);
    this.modalController.dismiss(driver, 'selected');
  }
  close() {
    this.modalController.dismiss([], 'close');
  }
}
