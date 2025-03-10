import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

type Items = {
  [key: string]: string;
}

const config = require('../../next.config.js');
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // '${basePath}' -> config.basePath

  const post = { ...data, slug: realSlug, content } as Post;

  return configureBasePath(post);
}

export function configureBasePath(item : Post) {
  let itemStr = JSON.stringify(item);
  itemStr = itemStr.replaceAll(/\$\{basePath\}/gi, config.basePath);

  return JSON.parse(itemStr);

}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostByTitle(title: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.title === title);
}



