import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  private subscription?: Subscription;

  constructor(private chatService: ChatServiceService) {}

  ngOnInit() {
    this.subscription = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
