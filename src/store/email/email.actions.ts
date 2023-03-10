export class CheckHealth {
  public static readonly type = '[API]Check Health';
  constructor(public payload: string) {}
}
export class EmailActionSend {
  public static readonly type = '[Email] Send';
  constructor(public payload: string) {}
}
