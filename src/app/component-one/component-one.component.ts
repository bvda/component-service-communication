import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(private communicationService: CommunicationServiceService) { }

  ngOnInit(): void {
    console.log("ComponentOne", this.communicationService.sharedResource)
    this.communicationService.getSharedResource().subscribe(val => console.log(val))
  }


  click() {
    this.communicationService.updateSharedResource(`NoooooOOo`)
  }

}
