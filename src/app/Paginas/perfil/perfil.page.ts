import { Component } from '@angular/core';
import {UserService} from '../../Servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {

  public dato: any;
  constructor(
    public servicio: UserService
  ) { }

 public datos(){
    console.log(this.servicio.obtener())
    return this.servicio.obtener();
  }


}
