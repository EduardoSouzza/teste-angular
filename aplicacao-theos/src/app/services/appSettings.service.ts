import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppSettingsService {

  Url = 'http://localhost:1337/api/';

  constructor(private http: HttpClient) {
  }


  selectOptionState(estados, texto): any {
    var obj = estados.filter(est => est.nome == texto)[0];
    if (obj)
      return obj["cidades"];
  }

  public getProfissoesJSON(): Observable<any> {
    return this.http.get('assets/json/profissoes.json');
  }

  public getLocationJSON(): Observable<any> {
    return this.http.get('assets/json/estados-cidades.json');
  }

  public createUsuario(data: any): Observable<any> {
    return this.http.post(this.Url + "usuario", data);
  }

  public updateUsuario(data: any): Observable<any> {
    return this.http.put(this.Url + "usuario", data);
  }

  public getUsuario(): Observable<any> {
    return this.http.get(this.Url + "usuario");
  }

  public deleteUsuario(id: any): Observable<any> {
    return this.http.delete(this.Url + "usuario/" + id);
  }

  public findUsuario(texto: any): Observable<any> {
    return this.http.get(this.Url + "usuario/" + texto);
  }

}
