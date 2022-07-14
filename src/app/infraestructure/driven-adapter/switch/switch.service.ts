import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  public $modal = new EventEmitter<boolean>();

  constructor() {
  }


}
