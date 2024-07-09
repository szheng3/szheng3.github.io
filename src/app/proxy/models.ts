import type {PagedAndSortedResultRequestDto} from '@abp/ng.core';

export interface PagedAndFilteredResultRequestDto<TFilter> extends PagedAndSortedResultRequestDto {
  includeDetails: boolean;
  filter: TFilter;
}
