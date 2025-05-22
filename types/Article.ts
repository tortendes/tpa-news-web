import type { ClassificationTypeNames } from "typescript"
import type { Author } from "./Author"

export type Media = {
  id: number,
  documentId: string,
  url: string,
  formats: {
      large?: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string | null,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
      },
      small?: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string | null,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
      },
      medium?: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string | null,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
      },
      thumbnail?: {
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        path: string | null,
        size: number,
        width: number,
        height: number,
        sizeInBytes: number
      },
  }
}

export type Category = {
  id: string,
  documentId: string;
  name: string;
  description: string;
}

export class Article {
  id: number;
  status: string; // Note: 'stauts' might be a typo for 'status'
  date_created: Date;
  date_updated: Date;
  title: string;
  description: string;
  tags: string[];
  slug: string;
  seoImage: string;
  coverImage: string;
  featured: boolean;
  content: string;
  authors: number[];
  short_title: string;

  constructor(
    id: number,
    status: string,
    date_created: Date,
    date_updated: Date,
    title: string,
    description: string,
    tags: string[],
    slug: string,
    seoImage: string,
    coverImage: string,
    featured: boolean,
    content: string,
    authors: number[],
    short_title: string,
  ) {
    this.id = id;
    this.status = status;
    this.date_created = date_created;
    this.date_updated = date_updated;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.slug = slug;
    this.seoImage = seoImage;
    this.coverImage = coverImage;
    this.featured = featured;
    this.content = content;
    this.authors = authors;
    this.short_title = short_title;
  }
}

export class Live {
  id: number;
  status: string;
  date_created: string;
  date_updated: string;
  title: string;
  description: string;
  coverImage: string;
  seoImage: string;
  content: string;
  short_title: string;

  constructor(
    id: number,
    status: string,
    date_created: string,
    date_updated: string,
    title: string,
    description: string,
    coverImage: string,
    seoImage: string,
    content: string,
    short_title: string,
  ) {
    this.id = id;
    this.status = status;
    this.date_created = date_created;
    this.date_updated = date_updated;
    this.title = title;
    this.description = description;
    this.coverImage = coverImage;
    this.seoImage = seoImage;
    this.content = content;
    this.short_tite = short_title;
  }
}

export type AuthorRelation = {
  id: number;
  article_id: number | null;
  author_id: number;
}

export class LiveReport {
  id: number;
  status: string;
  date_created: string;
  report: Live | number;
  title: string;
  content: string;
  head_image: string | null;
  authors: LiveReportAuthorsInterface[];

  constructor(
    id: number,
    status: string,
    date_created: string,
    report: Live | number,
    title: string,
    content: string,
    head_image: string | null,
    authors: LiveReportAuthorsInterface[]
  ) {
    this.id = id;
    this.status = status;
    this.date_created = date_created;
    this.report = report;
    this.title = title;
    this.content = content;
    this.head_image = head_image;
    this.authors = authors;
  }
}

export type LiveReportAuthorsInterface = {
  author_id: Author;
}