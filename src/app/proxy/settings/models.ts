import type {AuditedEntityDto} from '@abp/ng.core';

export interface UserSettingDto extends AuditedEntityDto<number> {
  weatherNotifications: boolean;
  weatherNotificationSettingId: number;
  weatherNotificationSetting: WeatherNotificationSettingDto;
}

export interface UserSettingUpdateDto {
  weatherNotifications: boolean;
  weatherNotificationSetting: WeatherSettingUpdateDto;
}

export interface WeatherNotificationSettingDto extends AuditedEntityDto<number> {
  location?: string;
  notificationTime?: string;
  severeNotificationOnly: boolean;
}

export interface WeatherSettingUpdateDto {
  location: string;
  notificationTime: string;
  severeNotificationOnly: boolean;
}
