/** @format */

export interface PostsInterFace {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: StatusEnum;
  type: MainType;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: Status;
  ping_status: Status;
  sticky: boolean;
  template: string;
  format: Format;
  meta: Meta;
  categories: number[];
  tags: number[];
  jetpack_publicize_connections: any[];
  acf: any[];
  yoast_head: string;
  yoast_head_json: YoastHeadJSON;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: AuthorElement[];
  replies: AuthorElement[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": AuthorElement[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface AuthorElement {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: CuryName;
  href: Href;
  templated: boolean;
}

export enum Href {
  HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum CuryName {
  Wp = "wp",
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: Taxonomy;
  embeddable: boolean;
  href: string;
}

export enum Taxonomy {
  Category = "category",
  PostTag = "post_tag",
}

export enum Status {
  Open = "open",
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export enum Format {
  Standard = "standard",
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  om_disable_all_campaigns: boolean;
  inline_featured_image: boolean;
  _mi_skip_tracking: boolean;
  jetpack_publicize_message: string;
  jetpack_is_tweetstorm: boolean;
  jetpack_publicize_feature_enabled: boolean;
  jetpack_social_post_already_shared: boolean;
  jetpack_social_options: any[];
}

export enum StatusEnum {
  Publish = "publish",
}

export enum MainType {
  Post = "post",
}

export interface YoastHeadJSON {
  title: string;
  description: string;
  robots: Robots;
  canonical: string;
  og_locale: OgLocale;
  og_type: OgType;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: OgSiteName;
  article_publisher: string;
  article_published_time: Date;
  article_modified_time: Date;
  og_image: OgImage[];
  author: AuthorEnum;
  twitter_card: TwitterCard;
  twitter_misc: TwitterMisc;
  schema: Schema;
}

export enum AuthorEnum {
  CleanSolutions = "Clean Solutions",
  EditorialTeam = "Editorial Team",
}

export interface OgImage {
  width: number;
  height: number;
  url: string;
  type: OgImageType;
}

export enum OgImageType {
  ImagePNG = "image/png",
}

export enum OgLocale {
  EnUS = "en_US",
}

export enum OgSiteName {
  CustomcleansolutionsCOM = "customcleansolutions.com",
}

export enum OgType {
  Article = "article",
}

export interface Robots {
  index: Index;
  follow: Follow;
  "max-snippet": MaxSnippet;
  "max-image-preview": MaxImagePreview;
  "max-video-preview": MaxVideoPreview;
}

export enum Follow {
  Follow = "follow",
}

export enum Index {
  Index = "index",
}

export enum MaxImagePreview {
  MaxImagePreviewLarge = "max-image-preview:large",
}

export enum MaxSnippet {
  MaxSnippet1 = "max-snippet:-1",
}

export enum MaxVideoPreview {
  MaxVideoPreview1 = "max-video-preview:-1",
}

export interface Schema {
  "@context": string;
  "@graph": Graph[];
}

export interface Graph {
  "@type": GraphType;
  "@id": string;
  isPartOf?: Breadcrumb;
  author?: GraphAuthor;
  headline?: string;
  datePublished?: Date;
  dateModified?: Date;
  mainEntityOfPage?: Breadcrumb;
  wordCount?: number;
  commentCount?: number;
  publisher?: Breadcrumb;
  keywords?: string[];
  articleSection?: string[];
  inLanguage?: InLanguage;
  potentialAction?: PotentialAction[];
  copyrightYear?: string;
  copyrightHolder?: Breadcrumb;
  url?: string;
  name?: string;
  description?: string;
  breadcrumb?: Breadcrumb;
  itemListElement?: ItemListElement[];
  logo?: Image;
  image?: Image;
  sameAs?: string[];
}

export enum GraphType {
  Article = "Article",
  BreadcrumbList = "BreadcrumbList",
  Organization = "Organization",
  Person = "Person",
  WebPage = "WebPage",
  WebSite = "WebSite",
}

export interface GraphAuthor {
  name: AuthorEnum;
  "@id": string;
}

export interface Breadcrumb {
  "@id": string;
}

export interface Image {
  "@id": string;
  "@type"?: ImageType;
  inLanguage?: InLanguage;
  url?: string;
  contentUrl?: string;
  caption?: AuthorEnum;
  width?: number;
  height?: number;
}

export enum ImageType {
  ImageObject = "ImageObject",
}

export enum InLanguage {
  EnUS = "en-US",
}

export interface ItemListElement {
  "@type": ItemListElementType;
  position: number;
  name: string;
  item?: string;
}

export enum ItemListElementType {
  ListItem = "ListItem",
}

export interface PotentialAction {
  "@type": PotentialActionType;
  name?: PotentialActionName;
  target: string[] | TargetClass;
  "query-input"?: QueryInput;
}

export enum PotentialActionType {
  CommentAction = "CommentAction",
  ReadAction = "ReadAction",
  SearchAction = "SearchAction",
}

export enum PotentialActionName {
  Comment = "Comment",
}

export enum QueryInput {
  RequiredNameSearchTermString = "required name=search_term_string",
}

export interface TargetClass {
  "@type": TargetType;
  urlTemplate: URLTemplate;
}

export enum TargetType {
  EntryPoint = "EntryPoint",
}

export enum URLTemplate {
  HTTPSCustomcleansolutionsCOMSSearchTermString = "https://customcleansolutions.com/?s={search_term_string}",
}

export enum TwitterCard {
  SummaryLargeImage = "summary_large_image",
}

export interface TwitterMisc {
  "Written by": AuthorEnum;
  "Est. reading time": EstReadingTime;
}

export enum EstReadingTime {
  The5Minutes = "5 minutes",
  The6Minutes = "6 minutes",
  The7Minutes = "7 minutes",
}
