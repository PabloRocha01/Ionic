import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatoPage } from "./contato.page";

//Variavel que contem o caminho para o componente (page) que será carregado nessa nova  filha
const routes: Routes = [
    //Rotas simples
    {path: '', component: ContatoPage}
]

@NgModule({
    //Routermodule possui as ferramentas para criação de rotas
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContatoPageRoutingModule{}