import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageManagerService {
  public messagesSubject$: Subject<string> = new Subject<string>();

  private messages: Array<string> = [
    'Hi!',
    'My name is Michał Kamiński',
    'I am a novice front-end developer',
    'Welcome to my portfolio page!',
    'I will tell you a few things about myself',
    'If you forget anything, feel free to check info section in top right corner!',
  ];

  public runMessages(): void {
    let time: number = 2000;

    for (let i: number = 0; i < this.messages.length; i++) {
      time += this.messages[i].length * 80;
      setTimeout(
        (): void => {
          this.sendMessage(i);
        },
        (this.messages[i].length * 80) / 2 + time,
      );
    }
  }

  private sendMessage(id: number): void {
    this.messagesSubject$.next(this.messages[id]);
  }
}
