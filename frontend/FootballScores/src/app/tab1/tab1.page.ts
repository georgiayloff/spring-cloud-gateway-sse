import { Component } from '@angular/core';
import { ScoresConsumerService } from '../scores-consumer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  messages = [];
  messageCounter = 1;

  constructor(private scoresConsumer: ScoresConsumerService) {
    this.scoresConsumer.connectToEventSource().subscribe(message => {
      console.log('Message received: ', message);
      this.messages.push({ payload: message, counter: this.messageCounter++});
    });
  }

}
