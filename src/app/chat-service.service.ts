import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  private messageSubject = new Subject<string>();

  constructor() {
    this.connectToChatServer();
  }

  private connectToChatServer() {
    setInterval(() => {
      const message = 'Mensaje del chat: ' + new Date().toLocaleTimeString();
      this.messageSubject.next(message);
    }, 1000);
  }

  getMessages(): Observable<string> {
    return this.messageSubject.asObservable();
  }

}
