import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  
  sharedResource = 'Shared Resource'

  private name = new BehaviorSubject<string>("");

  constructor() { }

  updateSharedResource(value: string = ''): void {
    this.sharedResource = value
    this.name.next(this.sharedResource)
  }

  getSharedResource() {
    return this.name.asObservable()
  }

}
