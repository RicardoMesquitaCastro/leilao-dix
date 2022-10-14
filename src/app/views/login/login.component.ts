import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserServiceService) {

    this.form =this.formBuilder.group({
      email:['', Validators.email],
      senha:['']
    });

   }


  ngOnInit(): void {
  }
  goToCadastro(){
    this.router.navigate(['/cadastro']);
  }
  logar(){
    console.log(this.form.value)
    this.userService.autenticar(this.form.value.email, this.form.value.senha).subscribe((autenticacao)=>{
      console.log(autenticacao);

    });
  }
  }


