import {IPortfolioParam} from 'src/app/core/api/portfolio.service';

export class GetPortfoliosAction {
  public static readonly type = '[Portfolio] get items';

  constructor(public payload: IPortfolioParam) {}
}
export class AddPortfoliosAction {
  public static readonly type = '[Portfolio] add items';

  constructor(public payload: IPortfolioParam) {}
}
export class GetPortfolioAction {
  public static readonly type = '[Portfolio] get item';

  constructor(public payload: number) {}
}
export class CreatePortfolioAction {
  public static readonly type = '[Portfolio] create item';

  constructor(public payload: any) {}
}
export class GetSkillsAction {
  public static readonly type = '[Portfolio] get skills';
}
export class GetCataloguesAction {
  public static readonly type = '[Portfolio] get catalogues';
}
export class DeletePortfolioAction {
  public static readonly type = '[Portfolio] delete portfolio';
  constructor(public payload: number) {}
}

export class UploadImageAction {
  public static readonly type = '[Images] Uploader';

  constructor(public payload: any) {}
}
