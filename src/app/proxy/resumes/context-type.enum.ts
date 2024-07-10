import {mapEnumToOptions} from '@abp/ng.core';

export enum ContextType {
  Html = 'Html',
  Markdown = 'Markdown',
}

export const contextTypeOptions = mapEnumToOptions(ContextType);
