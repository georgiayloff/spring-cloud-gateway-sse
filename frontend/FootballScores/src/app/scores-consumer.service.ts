import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresConsumerService {

  constructor(private ngZone: NgZone) { }

  connectToEventSource(): Observable<any> {
    console.log('CONNECT');
    const source = new EventSource('http://localhost:8080/sse');
    return new Observable(observer => {
      source.onopen = opened => {
        console.log('OPEN');
        observer.next(opened);
      };
      source.addEventListener('push', (message) => {
        this.ngZone.run(() => {
          console.log(message);
          observer.next(message);
        });
      })
      source.onmessage = message => {
        this.ngZone.run(() => {
          console.log(message.data);
          observer.next(message.data);
        });
      };
      source.onerror = error => {
        this.ngZone.run(() => {
          observer.error(error);
        });
      };
    });
  }
}
