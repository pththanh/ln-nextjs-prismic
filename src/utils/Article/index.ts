import { ArticleDocument } from "../../../prismicio-types";

export const flattenArtilce = (articles: ArticleDocument<string>[]) => {
  return articles.map((item) => {
    const data = item.data;

    return {
      type: data.type,
      title: data.article_title,
      createdAt: data.created_date,
      image: data.article_image,
      authorImage: data.author_link,
      authorName: data.author_link,
      content: data.content,
      timeToRead: data.time_to_read,
      tags: item.tags,
      href: item,
      externalHref: data.article_link,
      isExternalHref: data.article_link?.link_type === "Web",
    };
  });
};
