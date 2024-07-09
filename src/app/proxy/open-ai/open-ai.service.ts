import type {MessageResponse, RequestInputDto} from './models';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  apiName = 'Default';


  chatByUserInput = (userInput: RequestInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MessageResponse>({
        method: 'POST',
        url: '/api/app/open-ai/chat',
        body: userInput,
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
