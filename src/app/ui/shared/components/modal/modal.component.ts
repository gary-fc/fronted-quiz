import { Component, OnInit } from '@angular/core';
import {SwitchService} from '../../../../infraestructure/driven-adapter/switch/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private switchModalService: SwitchService) { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.switchModalService.$modal.emit(false)
  }

}
