import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Usuario,Rusuario} from '../Modelo/usuario';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_LOGIN: string= 'https://dummyjson.com/auth/login';
  public infouser!: Rusuario | null;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public autenticar({username,password}:Usuario){
    this.http.post<Rusuario>(this.URL_LOGIN,{
      username,
      password
    },{
      headers:{
        'Content-Type':'application/json',
        // 'Authorization': Bearer $(this.infouser.token)
      }
    })
    .subscribe(async(datos)=>{
      this.infouser= datos;
      this.router.navigate(['/perfil'])
    })
  }
  public obtener(){
    return this.infouser;
  }
}
