import type {EntityDto} from '@abp/ng.core';

export interface MessageDto {
  role?: string;
  content?: string;
}

export interface MessageResponse extends EntityDto {
  message?: string;
}

export interface RequestInputDto {
  message_history: MessageDto[];
}
