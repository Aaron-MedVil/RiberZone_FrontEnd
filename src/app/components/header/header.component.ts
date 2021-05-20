import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  /**
   * Constructor de la clase
   */
  constructor(private modalCtrl: ModalController) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {}

  /**
   * Muestra una ventana modal con el menu del usuario
   * @returns Presentacion de la ventana modal
   */
  async userMenu() {

    const modal = await this.modalCtrl.create({
      component: UserMenuComponent,
      animated: true,
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'customModal'
    });

    return await modal.present();
  }
}
