import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../services/appSettings.service';
import { Formulario } from '../models/Formulario';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare var jQuery;

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.less']
})
export class ListagemComponent implements OnInit {

  usuarios = [];
  estados = [];
  cidades = [];
  submitted = false;
  usuario: any;
  profissoes: any;
  formulario: FormGroup;

  constructor(private appSettings: AppSettingsService,
    private formBuilder: FormBuilder) {


    this.formulario = this.formBuilder.group({
      _id: ['', Validators.required],
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

    this.getUsuarios();

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

  ngOnInit() {
  }

  get formListagem() { return this.formulario.controls; }

  getUsuarios() {
    this.usuarios = [];
    this.appSettings.getUsuario().subscribe(res => {
      this.appSettings.stopLoader();
      res.forEach(element => {
        this.usuarios.push(element);
      });
    });
  }

  getUsuario(usuario) {
    this.usuario = usuario;
  }

  deletar() {
    this.appSettings.deleteUsuario(this.usuario._id).subscribe(res => {
      this.appSettings.stopLoader();
      jQuery(".modal").modal("hide");
      this.getUsuarios();
    });
  }

  search(texto) {
    if (texto == "")
      this.getUsuarios();

    if (texto.length < 3) {
      return;
    }

    this.appSettings.findUsuario(texto).subscribe(res => {
      this.appSettings.stopLoader();
      if (res.length > 0) {
        this.usuarios = [];
        res.forEach(element => {
          this.usuarios.push(element);
        });
      } else {
        this.usuarios = [];
      }
    });
  }

  editar(usuario) {
    this.setValueForm(usuario);
  }

  setValueForm(usuario) {
    (<FormControl>this.formulario.controls['_id']).setValue(usuario._id);
    (<FormControl>this.formulario.controls['nome']).setValue(usuario.nome);
    (<FormControl>this.formulario.controls['sobrenome']).setValue(usuario.sobrenome);
    (<FormControl>this.formulario.controls['email']).setValue(usuario.email);
    (<FormControl>this.formulario.controls['estado']).setValue(usuario.estado);
    this.selectOptionState(usuario.estado);
    (<FormControl>this.formulario.controls['cidade']).setValue(usuario.cidade);
    (<FormControl>this.formulario.controls['sexo']).setValue(usuario.sexo);
    (<FormControl>this.formulario.controls['areaFormacao']).setValue(usuario.areaFormacao);
    (<FormControl>this.formulario.controls['profissao']).setValue(usuario.profissao);
    (<FormControl>this.formulario.controls['data']).setValue(new Date(usuario.createdon).toISOString().substring(0, 10));
  }


  onSubmit(modalEditar) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    } else {
      this.appSettings.updateUsuario(this.formulario.value).subscribe(res => {
        jQuery(".modal").modal("hide");
        this.appSettings.stopLoader();
        this.getUsuarios();
      });
    }
  }

  selectOptionState(texto): any {
    this.cidades = this.appSettings.selectOptionState(this.estados, texto);
  }

}
