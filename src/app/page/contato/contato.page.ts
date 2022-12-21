import { Component, OnInit } from "@angular/core";
import { ActionSheetController, AlertController, LoadingController } from "@ionic/angular";
import { DatabaseService } from "src/app/service/database.service";
import { UtilityService } from "src/app/service/utility.service";
import { Lista } from "../home/produto.model";

@Component({
    selector: 'app-contato',
    templateUrl: 'contato.page.html',
    styleUrls: ['contato.page.scss']
})


export class ContatoPage implements OnInit {

    

    lista: Lista[] = [];
  
    
    constructor(
     
      private loadCtrl: LoadingController,
    
      private database: DatabaseService,
      
      private alertCtrl: AlertController, 
      
      private utilizando: UtilityService,
  
      private actionSheet: ActionSheetController,
      
  
      ) {}
      ngOnInit(): void {
        //Carrega o metado no inicio da pagina
        this.utilizando.carregando('carregando');
    
        //this.httpClient.get<Lista[]>('http://localhost:3000/produto').subscribe(results => this.lista = results);
      
        this.database.getItem().subscribe(results => this.lista = results)
    
      }
    
      async carregando(){
        const load = this.loadCtrl.create({
          //mode: 'ios',
          message: 'Aguarde..',
          duration: 1500
        });
    
        (await load).present();
      }    
    
      
     
    
      
    
      async alertando(){
        const alert = this.alertCtrl.create({
         // mode:'ios',
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
            
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log ('CPF CANCELADO!')
              }
            },
            
            {
              text: 'Cadastrar',
              handler: (form) => {
                
                let   item = {
                nome: form.item,
                quantidade: form.qtd
              };
                console.log (item);
                this.database.postItem(item)
                this.utilizando.toastando("Item cadastrado", "bottom", "dark", 1500);
                
              }
            }
        ]
        });
          (await alert).present();
      }
      
      deletar(id: number){
        this.database.deleteItem(id);
      
        this.utilizando.toastando("Item excluído", "bottom", "danger", 1500);
        
      }
    
      async actionMetod(item: Lista) {
        const action = this.actionSheet.create({
          //mode: 'ios',
          header: 'Selecione uma opção',
          buttons: [
            {
              text: item.status ? 'Desmarcar' : 'Marcar', 
              icon: item.status ? 'radio-button-off' : 'checkmark-circle',
              handler: () => {
                item.status = !item.status;
                this.database.statusItem(item);
              }
            },
            {
              text:"Cancelar",
              handler:() => {
                this.utilizando.toastando('Cancelamos','middle','bottom', 1500);
              }
            }
          ]
        }); (await action).present();
    }
      }
    