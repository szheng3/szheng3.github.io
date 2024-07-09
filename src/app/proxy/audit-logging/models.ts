import type {PagedAndSortedResultRequestDto} from '@abp/ng.core';

export interface GetAuditLogDto extends PagedAndSortedResultRequestDto {
  startTime?: string;
  endTime?: string;
  httpMethod?: string;
  url?: string;
  userId?: string;
  userName?: string;
  applicationName?: string;
  clientIpAddress?: string;
  correlationId?: string;
  maxExecutionDuration?: number;
  minExecutionDuration?: number;
  hasException?: boolean;
  httpStatusCode?: number;
  includeDetails: boolean;
}
