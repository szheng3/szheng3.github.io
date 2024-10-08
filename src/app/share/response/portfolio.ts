// export interface IPortfolios {
//   current?: number;
//   pages?: number;
//   records: PortfolioDTO[];
//   searchCount?: boolean;
//   size?: number;
//   total?: number;
// }
//
// export interface IPortfolio {
//   catalogues?: ICatalogue[];
//   images?: Image[];
//   links?: Link[];
//   portfolio?: Portfolio;
//   skills?: ISkill[];
// }
//
// interface PortfolioDTO {
//   catalogues: ICatalogue[];
//   createDate: string;
//
//   idPortfolio: number;
//   images: Image[];
//   links: Link[];
//   summary: string;
//   title: string;
// }
//
// export interface Link {
//   linkDetails: string;
//   linkType: string;
//   portfolioIdPortfolio: number;
// }
//
// interface Image {
//   createDate: string;
//   idImage: string;
//   imageName: string;
//   imageType: string;
//   isDelete: boolean;
//   path: string;
// }
//
// export interface ICatalogue {
//   idCatalogue: number;
//   name: string;
// }
//
// export interface ISkill {
//   idSkills: number;
//   name: string;
// }
//
// interface Portfolio {
//   client: string;
//   content: string;
//   contentType: string;
//   createDate: string;
//   idPortfolio: number;
//   isDelete: boolean;
//   isHot: boolean;
//   summary: string;
//   title: string;
//   userId: number;
// }


//
export interface IPortfolios {
  items: IPortfolio[]
  totalCount?: number
}

interface CommonFields {
  id?: number;
  creationTime?: string;
  creatorId?: string;
  lastModificationTime?: string;
  lastModifierId?: string;
}

export interface Catalogue extends CommonFields {
  name: string;
}

export interface Image extends CommonFields {
  imageName: string;
  path: string;
}

export interface Skill extends CommonFields {
  name: string;
}

export interface PortfolioLink extends CommonFields {
  linkDetails: string;
  linkType: string;
}

export interface IPortfolio extends CommonFields {
  isHot?: boolean;
  title?: string;
  summary?: string;
  client?: string;
  content?: string;
  contentType?: string;
  rank?: number;
  catalogues?: Catalogue[];
  images?: Image[];
  skills?: Skill[];
  portfolioLinks?: PortfolioLink[];
}
export interface ImageUploader {
  status: number;
  url: string;
  key: string;
}
