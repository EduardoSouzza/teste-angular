import { Component } from '@angular/core';
import { AppSettingsService } from './services/appSettings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  formulario: FormGroup;
  submitted = false;
  profissoes: any;
  estados = [];
  cidades = [];

  constructor(private appSettings: AppSettingsService, private formBuilder: FormBuilder) {


    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      sexo: ['', Validators.required],
      data: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      areaFormacao: ['', Validators.required],
      profissao: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    //get profissoes
    this.appSettings.getProfissoesJSON().subscribe(res => {
      this.profissoes = res.profissoes;
    });

    //get Estados
    this.appSettings.getLocationJSON().subscribe(res => {
      res.estados.forEach(loc => {
        this.estados.push(loc);
      });
      this.selectOptionState(this.estados[0].nome);
    });
  }

  selectOptionState(states): any {
    var obj = this.estados.filter(est => est.nome == states)[0];
    if (obj)
      this.cidades = obj["cidades"];
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    } else {
      this.appSettings.createUsuario(this.formulario.value).subscribe(res => {
        debugger
      });
    }
  }

}
