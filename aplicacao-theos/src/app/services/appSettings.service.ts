import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppSettingsService {

  Url = environment.url;
  loader = false;

  constructor(private http: HttpClient) {
  }


  selectOptionState(estados, texto): any {
    var obj = estados.filter(est => est.nome == texto)[0];
    if (obj)
      return obj["cidades"];
  }

  public startLoader() {
    this.loader = true;
  }

  public stopLoader() {
    this.loader = false;
  }

  public getProfissoesJSON(): Observable<any> {
    this.startLoader();
    return this.http.get('assets/json/profissoes.json');
    ;
  }

  public getLocationJSON(): Observable<any> {
    this.startLoader();
    return this.http.get('assets/json/estados-cidades.json');;
  }

  public createUsuario(data: any): Observable<any> {
    this.startLoader();
    return this.http.post(this.Url + "usuario", data);;
  }

  public updateUsuario(data: any): Observable<any> {
    this.startLoader();
    return this.http.put(this.Url + "usuario", data);;
  }

  public getUsuario(): Observable<any> {
    this.startLoader();
    return this.http.get(this.Url + "usuario");;
  }

  public deleteUsuario(id: any): Observable<any> {
    this.startLoader();
    return this.http.delete(this.Url + "usuario/" + id);;
  }

  public findUsuario(texto: any): Observable<any> {
    this.startLoader();
    return this.http.get(this.Url + "usuario/" + texto);;
  }

}
