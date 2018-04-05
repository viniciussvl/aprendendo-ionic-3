import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  // Variables
  public username:string = "Vinicius Aquino";
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somarDoisNumeros(num1:number, num2:number): void{
    
    console.log(num1 + num2);
  }

  // Quando a pagina carregar...
  ionViewDidLoad() {
    this.somarDoisNumeros(5, 2);
    console.log('ionViewDidLoad FeedPage');
  }

}
