import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  logged: boolean = false;

  /**
   * Constructor de la clase
   * @param modalCtrl Controlador de la ventana modal
   */
  constructor(private modalCtrl: ModalController) { }

  /**
   * Metodo que se ejecuta al iniciar la clase
   */
  ngOnInit() {
    // Comprobar si el usuario esta autenticado o no
  }

  /**
   * Metodo que cierra la ventana modal
   */
  dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }

  /**
   * Metodo que autentica al usuario
   */
  login() { }
}
