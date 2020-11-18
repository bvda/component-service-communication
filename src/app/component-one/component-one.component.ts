import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.getSharedResource().subscribe(val => console.log(`Component One ${val}`))
  }


  click() {
    this.communicationService.updateSharedResource(1)
  }

}
