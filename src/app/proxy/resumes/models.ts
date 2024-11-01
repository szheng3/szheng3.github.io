import type {EntityDto} from '@abp/ng.core';
import type {ContextType} from './context-type.enum';
import {PagedAndFilteredResultRequestDto} from "~/proxy";

export interface BlogCategoryDto extends EntityDto<string> {
  name?: string;
}

export interface BlogDto {
  id?: string;
  title?: string;
  context?: string;
  contextType?: ContextType;
  viewCount?: number;
  commentsCount?: number;
  images: ImageDto[];
  categories: BlogCategoryDto[];
  tags: BlogTagDto[];
  creationTime?: string;
  lastModificationTime?: string;
}

export interface BlogFilterDto extends PagedAndFilteredResultRequestDto<BlogDto> {
  searchTerm?: string;
  categoryNames: string[];
  tagNames: string[];
}

export interface BlogTagDto extends EntityDto<string> {
  name?: string;
}

export interface CatalogueDto extends EntityDto<number> {
  name?: string;
}

export interface CategoryWithBlogCount extends BlogCategoryDto {
  blogCount: number;
}

export interface CreateUpdateBlogCategoryDto {
  name?: string;
}

export interface CreateUpdateBlogDto {
  title: string;
  context: string;
  contextType: ContextType;
  images: ImageDto[];
  categories: BlogCategoryDto[];
  tags: BlogTagDto[];
}

export interface CreateUpdateBlogTagDto {
  name?: string;
}

export interface CreateUpdateCatalogueDto {
  name?: string;
}

export interface CreateUpdateSkillDto {
  name?: string;
}

export interface ImageDto extends EntityDto<string> {
  imageName?: string;
  path?: string;
}

export interface PortfolioDto extends EntityDto<number> {
  isHot?: boolean;
  title?: string;
  summary?: string;
  client?: string;
  content?: string;
  contentType?: string;
  rank?: number;
  catalogues: CatalogueDto[];
  images: ImageDto[];
  skills: SkillDto[];
  portfolioLinks: PortfolioLinkDto[];
}

export interface PortfolioLinkDto extends EntityDto<number> {
  linkDetails?: string;
  linkType?: string;
}

export interface SkillDto extends EntityDto<number> {
  name?: string;
}
