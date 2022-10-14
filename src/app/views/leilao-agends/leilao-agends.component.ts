import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leilao-agends',
  templateUrl: './leilao-agends.component.html',
  styleUrls: ['./leilao-agends.component.css']
})
export class LeilaoAgendsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDetailsAgends(){
    this.router.navigate(['/detalhesAgenda']);
}
}
