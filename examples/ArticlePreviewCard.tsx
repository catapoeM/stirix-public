import type { ReactNode } from "react";
import {
  createArticlePath,
  formatArticleStats,
  getCategoryLabel,
  type ArticlePreview,
} from "./articlePreviewLogic";

type ArticlePreviewCardProps = {
  article: ArticlePreview;
  actions?: ReactNode;
  onOpen: (path: string) => void;
};

const ArticlePreviewCard = ({
  article,
  actions,
  onOpen,
}: ArticlePreviewCardProps) => {
  // UI stays focused on rendering; article path logic lives in articlePreviewLogic.ts.
  const articlePath = createArticlePath(article);

  return (
    <article>
      <button type="button" onClick={() => onOpen(articlePath)}>
        <p>{getCategoryLabel(article.category)}</p>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <small>{formatArticleStats(article)}</small>
      </button>

      {/* Optional action slot can hold moderation or navigation controls. */}
      {actions && <footer>{actions}</footer>}
    </article>
  );
};

const exampleArticle: ArticlePreview = {
  id: "example-id",
  title: "Superliga Match Preview",
  summary: "A short preview of an upcoming football story.",
  category: "superliga",
  createdAt: "2026-06-20",
  heartCount: 12,
  viewCount: 340,
};

const ExampleUsage = () => {
  return (
    <ArticlePreviewCard
      article={exampleArticle}
      onOpen={(path) => {
        console.log(`Open article: ${path}`);
      }}
    />
  );
};

export {
  ArticlePreviewCard,
  ExampleUsage,
};
