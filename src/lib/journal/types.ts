export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { email: { label: string; subject: string; body: string } }
  | { table: { caption?: string; head: string[]; rows: string[][] } }
  | { note: string };

export type ArticleInput = {
  slug: string;
  title: string;
  category: string;
  /** Meta description, written for the search result snippet (under ~155 chars). */
  description: string;
  /** Three or four key takeaways. points[0] is also the card blurb on /journal. */
  points: string[];
  intro: string;
  blocks: Block[];
  related: string[];
  updated?: string;
};

export type Article = ArticleInput & { index: number; updated: string };
