import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(

    // Ferramenta do carregamento   carregando..
    private loading: LoadingController,
    private toast:  ToastController
  ) { }

  //Método do loading
  async carregando(menssagem: string, posicao: "top" | "middle" | "bottom", duracao: number){
    const load = this.loading.create({

      mode: 'ios',
      message: menssagem, 
      duration: duracao
  
    });

    (await load).present();
    location.reload();
  }
  
  async toastando(menssagem: string, posicao: "top" | "middle" | "bottom" , cor: string){
    const toastando = this.toast.create({

      mode: 'ios',
      message: menssagem,
      duration: 2000,
      color: cor
    });

    (await toastando).present();
    location.reload();

  }
}
