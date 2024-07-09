import {mapEnumToOptions} from '@abp/ng.core';

export enum ContextType {
  Html = 0,
  Markdown = 1,
}

export const contextTypeOptions = mapEnumToOptions(ContextType);
