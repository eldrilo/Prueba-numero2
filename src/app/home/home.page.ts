import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../Servicios/user.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formulario: FormGroup
  constructor(
    private f: FormBuilder,
    private servicio: UserService
  ) {
    this.formulario= this.f.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  public iniciar(){
    this.servicio.autenticar({
      username: this.formulario.value.username,
      password: this.formulario.value.password
    })
  }
}
