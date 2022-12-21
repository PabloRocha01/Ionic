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
  router: any;
  util: any;


  constructor(
    
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService
  ) {}

  ngOnInit() {

    this.routeId = this.activatedRoute.snapshot.params['id'];
    if(this.routeId){
    this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produtos = caixa});
    }   
  }

update(form: any){
  this.banco.updateItem(form.value, this.routeId);
  this.router.navigate(['']);
  this.util.toastando("Item Atualizado com sucesso", "middle", 2000, "medium");
}
}
