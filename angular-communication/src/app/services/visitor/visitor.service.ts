import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Visitor } from '../../models/Visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private visitorSource = new Subject<Visitor>();

  publishedVisitor = this.visitorSource.asObservable();

  constructor() { }

  visitorAnnouncement(visitor: Visitor) {
    this.visitorSource.next(visitor);
    console.log("Announcement from visitor service");
  }
}
