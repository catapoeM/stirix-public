type ArticleCategory = "romania" | "superliga" | "international";

type ArticlePreview = {
  id: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  createdAt: string;
  heartCount: number;
  viewCount: number;
};

const categoryLabels: Record<ArticleCategory, string> = {
  romania: "Romania",
  superliga: "Superliga",
  international: "International",
};

const getCategoryLabel = (category: ArticleCategory) => {
  return categoryLabels[category];
};

const formatArticleStats = (
  article: Pick<ArticlePreview, "heartCount" | "viewCount">,
) => {
  return `${article.viewCount} views · ${article.heartCount} hearts`;
};

const createArticleSlug = (title: string) => {
  // Keep generated URLs readable while removing characters that do not belong in slugs.
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const createArticlePath = (article: Pick<ArticlePreview, "id" | "title">) => {
  // Include the stable id at the end so titles can change without breaking article lookup.
  return `/article/${createArticleSlug(article.title)}-${article.id}`;
};

export {
  type ArticleCategory,
  type ArticlePreview,
  getCategoryLabel,
  formatArticleStats,
  createArticlePath,
};
