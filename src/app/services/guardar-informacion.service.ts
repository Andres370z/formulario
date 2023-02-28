import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardarInformacionService {
  @Output() emisorInfo: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
