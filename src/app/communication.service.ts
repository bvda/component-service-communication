import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private count = 0
  private countSubject = new BehaviorSubject<number>(this.count);
  
  constructor() { }
  
  updateSharedResource(value: number = 0): void {
    this.count += value
    this.countSubject.next(this.count)
  }

  getSharedResource() {
    return this.countSubject.asObservable()
  }

}
