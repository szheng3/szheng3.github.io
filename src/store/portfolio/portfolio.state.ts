// import {
//   CreatePortfolioAction,
//   DeletePortfolioAction,
//   GetCataloguesAction,
//   GetPortfolioAction,
//   GetPortfoliosAction,
//   GetSkillsAction,
//   UploadImageAction
// } from 'src/store/portfolio/portfolio.actions';
// import {IPortfolioParam, PortfolioService} from 'src/app/core/api/portfolio.service';
// import {tap} from 'rxjs/operators';
// import {ICatalogue, IPortfolio, IPortfolios, ISkill} from 'src/app/share/response/portfolio';
// import {Injectable} from '@angular/core';
//
// export interface PortfolioStateModel {
//   portfolios?: IPortfolios;
//   portfolio?: IPortfolio;
//   skills?: ISkill[];
//   catalogue?: ICatalogue[];
// }
//
// @State<PortfolioStateModel>({
//   name: 'portfolio',
//   defaults: {}
// })
// @Injectable()
// export class PortfolioState {
//   private tableIndex: IPortfolioParam = {};
//
//   constructor(private portfolioService: PortfolioService) {
//   }
//
//   @Selector()
//   public static getState(state: PortfolioStateModel) {
//     return state;
//   }
//
//   @Selector()
//   public static getPagination(state: PortfolioStateModel) {
//     // @ts-ignore
//     const {total, size, current} = state.portfolios;
//     return {current, total, size};
//   }
//
//   @Selector()
//   public static getSkills(state: PortfolioStateModel) {
//     return state.skills;
//   }
//
//   @Selector()
//   public static getCatalogue(state: PortfolioStateModel) {
//     return state.catalogue;
//   }
//
//   // @Selector()
//   // public static getPortfolioDetails({ portfolio }: PortfolioStateModel): IPortfolioDetails {
//   //   const { client, createDate } = portfolio.portfolio;
//   //   return {
//   //     client,
//   //     createDate: moment(createDate).format('D MMM YYYY'),
//   //     imageSrc: portfolio.images.map(value => value.path).pop(),
//   //     skills: portfolio.skills.map(value => value.name),
//   //     content: portfolio.portfolio.content,
//   //     title: portfolio.portfolio.title,
//   //     links: portfolio.links
//   //   };
//   // }
//   //
//   // @Selector()
//   // public static getICards(state: PortfolioStateModel): ICards[] {
//   //   // todo fix images
//   //   return state?.portfolios?.records?.map(({ idPortfolio, title, summary, links, images, catalogues, createDate }) => ({
//   //     id: idPortfolio,
//   //     title,
//   //     description: summary,
//   //     url: links
//   //       .filter(({ linkType }) => linkType === 'WEB')
//   //       .map(({ linkDetails }) => linkDetails)
//   //       .pop(),
//   //     gitLink: links
//   //       .filter(({ linkType }) => linkType === 'GIT')
//   //       .map(({ linkDetails }) => linkDetails)
//   //       .pop(),
//   //     videosLink: links
//   //       .filter(({ linkType }) => linkType === 'YOUTUBE')
//   //       .map(({ linkDetails }) => linkDetails)
//   //       .pop(),
//   //     image: images.map(({ path }) => path).pop(),
//   //     tags: catalogues.map(({ name }) => name),
//   //     createDate
//   //   }));
//   // }
//
//   @Action(GetPortfoliosAction)
//   public getPortfoliosAction({patchState}: StateContext<PortfolioStateModel>, {payload}: GetPortfoliosAction) {
//     this.tableIndex = payload;
//     return this.portfolioService.getPortfolios(payload).pipe(tap(portfolios => patchState({portfolios})));
//   }
//
//   @Action(GetPortfolioAction)
//   public getPortfolioAction({patchState}: StateContext<PortfolioStateModel>, {payload}: GetPortfolioAction) {
//     patchState({portfolio: {}});
//     return this.portfolioService.getPortfolio(payload).pipe(tap(portfolio => patchState({portfolio})));
//   }
//
//   @Action(GetSkillsAction)
//   public getSkillsAction({patchState}: StateContext<PortfolioStateModel>) {
//     return this.portfolioService.getSkills().pipe(tap(skills => patchState({skills})));
//   }
//
//   @Action(GetCataloguesAction)
//   public getCatalogueAction({patchState}: StateContext<PortfolioStateModel>) {
//     return this.portfolioService.getCatalogues().pipe(tap(catalogue => patchState({catalogue})));
//   }
//
//   @Action(DeletePortfolioAction)
//   public deletePortfolioAction(
//     {patchState, dispatch}: StateContext<PortfolioStateModel>,
//     {payload}: DeletePortfolioAction
//   ) {
//     return this.portfolioService
//       .deletePortfolio(payload)
//       .pipe(tap(() => dispatch(new GetPortfoliosAction(this.tableIndex))));
//   }
//
//   @Action(CreatePortfolioAction)
//   public createPortfolioAction({
//                                  patchState,
//                                  dispatch
//                                }: StateContext<PortfolioStateModel>, {payload}: CreatePortfolioAction) {
//     return this.portfolioService.createPortfolio(payload).pipe(
//       tap(portfolio => patchState({portfolio})),
//       tap(x => dispatch(new GetPortfoliosAction({})))
//     );
//   }
//
//   @Action(UploadImageAction)
//   public postImageAction({patchState, dispatch}: StateContext<PortfolioStateModel>, {payload}: UploadImageAction) {
//     return this.portfolioService.postImage(payload);
//   }
// }
