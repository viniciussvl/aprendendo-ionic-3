import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

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
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {

  // Variables
  public username:string = "Vinicius Aquino";
  
  public objeto_feed = {
    titulo: "Vinicius Aquino",
    data: "09 de maio de 199s",
    descricao: "Estou criando um app hibrido, legal bem loucoooo",
    like: 12,
    comments: 4,
    time_comment: "11hrs atrás"

  }
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider: MoovieProvider  
    ) {
  }

  public somarDoisNumeros(num1:number, num2:number): void{
    
    console.log(num1 + num2);
  }

  // Quando a pagina carregar...
  ionViewDidLoad() {
    this.somarDoisNumeros(5, 2);
    this.moovieProvider.get_popuplar_movies().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
