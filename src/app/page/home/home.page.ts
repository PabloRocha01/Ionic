import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Lista} from './produto.model';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DatabaseService } from 'src/app/service/database.service';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  lista: Lista[] = [];

  
  constructor(
    private httpClient: HttpClient,
    //loadingController - Ferramenta do carregando 
    private loadCtrl: LoadingController,
    //loaddingcontrollet -> Ferramenta do carregando
    private database: DatabaseService,
    //AlertControllet -> Ferramenta que cria um alert
    private alertCtrl: AlertController, 
    //toastController -> Criar uma mensagem
    private toast: ToastController,

    private utilizando: UtilityService
    ) {}
    ngOnInit(): void {
    //Carrega o metado no inicio da pagina
    this.carregando();

    this.httpClient.get<Lista[]>('http://localhost:3000/produto').subscribe(results => this.lista = results);
  }

  async carregando(){
    const load = this.loadCtrl.create({
      //mode: 'ios',
      message: 'Aguarde..',
      duration: 1500
    });

    (await load).present();
  }    

  //Método do toast -> Exibe uma mensagem
 

  //Método do alertando

  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Produtos',
      inputs:[
        {
        name: 'item',
        type: 'text',
        placeholder: 'Informe o Produto'
      },
      {
        name: 'qtd',
        type: 'text',
        placeholder: 'Informe a quantidade'
      }
      ],
      buttons:[
        //Botão cancelar
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log ('CPF CANCELADO!')
          }
        },
        //Botão de cadastrar
        {
          text: 'Cadastrar',
          handler: (form) => {
            //Objeto que erá formar o nosso item da lista
            let   item = {
            nome: form.item,
            quantidade: form.qtd
          };
            console.log (item);
            this.database.postItem(item)
            this.utilizando.toastando("Item cadastrado", "bottom", "dark");
            
          }
        }
    ]
    });
      (await alert).present();
  }
  //Metodo do botão excluir
  deletar(id: number){
    this.database.deleteItem(id);
  //Método Chama a mensagem
    this.utilizando.toastando("Item excluído", "bottom", "danger");
    
  }
}


