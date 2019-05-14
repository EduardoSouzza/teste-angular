import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppSettingsService } from '../services/appSettings.service';
import { Router } from '@angular/router';

declare var jQuery;

@Component({
  selector: 'app-cadastar',
  templateUrl: './cadastar.component.html',
  styleUrls: ['./cadastar.component.less']
})

export class CadastarComponent {

  formulario: FormGroup;
  submitted = false;
  profissoes: any;
  estados = [];
  cidades = [];

  constructor(private appSettings: AppSettingsService, private formBuilder: FormBuilder, private router: Router) {

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
      this.appSettings.stopLoader();
      this.profissoes = res.profissoes;
    });

    //get Estados
    this.appSettings.getLocationJSON().subscribe(res => {
      this.appSettings.stopLoader();
      res.estados.forEach(loc => {
        this.estados.push(loc);
      });
      this.selectOptionState(this.estados[0].nome);
    });
  }

  selectOptionState(texto): any {
    this.cidades = this.appSettings.selectOptionState(this.estados, texto);
    (<FormControl>this.formulario.controls['estado']).setValue(texto);
    (<FormControl>this.formulario.controls['cidade']).setValue(this.cidades[0]);
  }


  get formCadastro() { return this.formulario.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    } else {
      this.appSettings.createUsuario(this.formulario.value).subscribe(res => {
        this.appSettings.stopLoader();
        jQuery("#modalCadastro").modal("show");
      });
    }
  }

  goListagem() {
    this.router.navigate(["/listagem"]);
  }

}
