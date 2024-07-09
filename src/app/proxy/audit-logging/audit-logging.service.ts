import type {GetAuditLogDto} from './models';
import type {PagedResultDto} from '@abp/ng.core';
import {Rest, RestService} from '@abp/ng.core';
import {Injectable} from '@angular/core';
import type {AuditLogDto} from '../audit/models';

@Injectable({
  providedIn: 'root',
})
export class AuditLoggingService {
  apiName = 'Default';


  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AuditLogDto>({
        method: 'GET',
        url: `/api/app/audit-logging/${id}`,
      },
      {apiName: this.apiName, ...config});


  getList = (input: GetAuditLogDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AuditLogDto>>({
        method: 'GET',
        url: '/api/app/audit-logging',
        params: {
          startTime: input.startTime,
          endTime: input.endTime,
          httpMethod: input.httpMethod,
          url: input.url,
          userId: input.userId,
          userName: input.userName,
          applicationName: input.applicationName,
          clientIpAddress: input.clientIpAddress,
          correlationId: input.correlationId,
          maxExecutionDuration: input.maxExecutionDuration,
          minExecutionDuration: input.minExecutionDuration,
          hasException: input.hasException,
          httpStatusCode: input.httpStatusCode,
          includeDetails: input.includeDetails,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount
        },
      },
      {apiName: this.apiName, ...config});

  constructor(private restService: RestService) {
  }
}
