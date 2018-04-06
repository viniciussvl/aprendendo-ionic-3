import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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

  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider: MoovieProvider, 
    public loadingCtrl: LoadingController
    ) {
  }

  

  public somarDoisNumeros(num1:number, num2:number): void{
    console.log(num1 + num2);
  }

  // Refresh - Loader
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  mostrarLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  ocultarLoader(){
    this.loader.dismiss();
  }

  // Quando entrar na pagina
  ionViewDidEnter() {
    this.carregarFilmes();
    
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  carregarFilmes(){
    this.mostrarLoader();
    this.moovieProvider.get_popuplar_movies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;

        this.ocultarLoader();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error => {
        console.log(error);
        this.ocultarLoader();
        this.refresher.complete();
        this.isRefreshing = false;
      }
    )
  }

}
