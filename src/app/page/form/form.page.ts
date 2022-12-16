import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';
import { Lista } from '../home/produto.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  routeId = null;
  produtos: any ={};


  constructor(
    //serve para capturar a rota (caminho) que etiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService
  ) {}

  ngOnInit() {

    this.routeId = this.activatedRoute.snapshot.params['id'];
    if(this.routeId){
    this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produtos = caixa});
    }
  }
//Método que acha o serviço de atualização
update(form: Lista){

}
}
