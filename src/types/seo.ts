export type PageMeta = {
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly type?: 'website' | 'article';
  readonly noindex?: boolean;
  readonly structuredData?: readonly Record<string, unknown>[];
};
