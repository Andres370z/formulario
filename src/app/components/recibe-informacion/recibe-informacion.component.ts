import { Component, Input, OnInit } from '@angular/core';
import { GuardarInformacionService } from 'src/app/services/guardar-informacion.service';


@Component({
  selector: 'app-recibe-informacion',
  templateUrl: './recibe-informacion.component.html',
  styleUrls: ['./recibe-informacion.component.css']
})
export class RecibeInformacionComponent implements OnInit{
  
  constructor(private servicioRecibe: GuardarInformacionService){}
  ngOnInit(): void {
    this.servicioRecibe.emisorInfo.subscribe(data =>{
      console.log('recibiendo data...', data);
    })
  }
}
