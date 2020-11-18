import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private communicationService: CommunicationServiceService) { }

  ngOnInit(): void {
    this.communicationService.getSharedResource().subscribe(val => console.log(val))
  }

  count = 0

  click() {
    this.count += 1
    this.communicationService.updateSharedResource(`new value ${this.count}`)
  }
}
