export interface CreatePortfolioRequest {
  catalogues?: Catalogue[];
  links?: Link[];
  portfolio?: Portfolio;
  portfolioHasImages?: PortfolioHasImage[];
  skills?: Skill[];
}

interface Skill {
  portfolioIdPortfolio?: number;
  skillsIdSkills?: number;
}

interface PortfolioHasImage {
  imageIdImage: string;
  portfolioIdPortfolio?: number;
}

interface Portfolio {
  client?: string;
  content?: string;
  contentType?: string;
  createDate?: string;
  idPortfolio?: number;
  isDelete?: boolean;
  isHot?: boolean;
  summary?: string;
  title?: string;
  userId?: number;
}

export interface Link {
  linkDetails: string;
  linkId?: number;
  linkType: string;
  portfolioIdPortfolio?: number;
}

interface Catalogue {
  catalogueIdCatalogue: number;
  portfolioIdPortfolio?: number;
}
