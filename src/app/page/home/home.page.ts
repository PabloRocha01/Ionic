import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Lista} from './produto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lista: Lista[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<Lista[]>('http://localhost:3000/produto').subscribe(results => this.lista = results);
  }
    
}


