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
  async carregando(menssagem: string){
    const load = this.loading.create({

      mode: 'ios',
      message: menssagem, 
      duration: 1500
  
    });

    (await load).present();
    //location.reload();
  }
  
  async toastando(menssagem: string, position: "top" | "middle" | "bottom" , cor: string, duration: number){
    const toastando = this.toast.create({

      mode: 'ios',
      message: menssagem,
      duration,
      position,
      color: cor
    });

    (await toastando).present();
    //location.reload();

  }
}
