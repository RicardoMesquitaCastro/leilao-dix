import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-live',
  templateUrl: './details-live.component.html',
  styleUrls: ['./details-live.component.css']
})
export class DetailsLiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTohome(){
    this.router.navigate(['/home']);
}
}
