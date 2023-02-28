import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardarInformacionService } from 'src/app/services/guardar-informacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  
  form: FormGroup
  respuesta:boolean = false
  constructor(
    private _bilder: FormBuilder,
    private servioEnviar: GuardarInformacionService
  ){
    this.form = this._bilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      operador: ['', Validators.required],
      operadorTv: ['',Validators.required],
      tipoCliente:['',Validators.nullValidator]
    })

  }
  ngOnInit(): void {
    
  }
  enviar(){
    // console.log(this.form.value);
    this.servioEnviar.emisorInfo.emit({
      data:this.form.value
    })
    
  }
}
