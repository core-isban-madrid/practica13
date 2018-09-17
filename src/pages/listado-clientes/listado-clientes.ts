import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listado-clientes',
  templateUrl: 'listado-clientes.html',
})
export class ListadoClientesPage {

  clientes:any = [
    {nombre: 'Gas Natural', cif: 'A123456789'},
    {nombre: 'Iberdrola', cif: 'A123456789'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ListadoClientesPage');
  }

  verCliente(cliente){
    this.navCtrl.push('VerClientePage', {cliente: cliente});
  }

}
