import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent {

  sharedResource$: Observable<number>;

  constructor(private communicationService: CommunicationService) { 
    this.sharedResource$ = this.communicationService.getSharedResource()
  }

  click() {
    this.communicationService.updateSharedResource(2)
  }
}
