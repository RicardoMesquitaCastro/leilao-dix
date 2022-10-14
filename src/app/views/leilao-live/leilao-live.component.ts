import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leilao-live',
  templateUrl: './leilao-live.component.html',
  styleUrls: ['./leilao-live.component.css']
})
export class LeilaoLiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDetails(){
    this.router.navigate(['/detalhes']);
}
}
