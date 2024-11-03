import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';


import {finalize, tap} from "rxjs/operators";
import {ChatService} from "~/core/api/chat.service";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  animations: [trigger('fadeInAnimation', [
    state('void', style({opacity: 0})),
    transition(':enter', [
      animate('0.5s ease-out', style({opacity: 1})),
    ]),
  ]),
    trigger('fadeOutAnimation', [
      state('*', style({opacity: 1})),
      transition(':leave', [
        animate('0.5s ease-out', style({opacity: 0})),
      ]),
    ]),],

})
export class ChatbotComponent {
  isShow = false;

  isLoading: boolean = false;
  messages: any[] = [
    {
      text: 'Please feel free to ask me any questions about Shuai Zheng and his blogs!',
      date: new Date(),
      reply: false,
      user: {
        name: 'Shuai\'s AI Bot',
        // avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
        avatar: '/assets/images/author-image/robot-face.png',
      },
    },
  ];

  constructor(private chatService: ChatService) {
    // this.messages = this.chatShowcaseService.loadMessages();
  }

  sendMessage(event: any) {
    this.isLoading = true
    this.chatService.send(event.message).pipe(
      tap((data: any) => {
        this.messages.push({
          text: data.message,
          date: new Date(),
          reply: false,
          type: 'text',
          user: {
            name: 'Shuai\'s AI Bot',
            // avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
            avatar: '/assets/images/author-image/robot-face.png',
          },
        });
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: 'User',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

  }


  changeStatus() {
    this.isShow = !this.isShow;
  }
}
