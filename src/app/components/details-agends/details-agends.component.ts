import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-agends',
  templateUrl: './details-agends.component.html',
  styleUrls: ['./details-agends.component.css']
})
export class DetailsAgendsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTohome(){
    this.router.navigate(['/agendado']);
}
goTologin(){
  this.router.navigate(['/login']);
}
}
