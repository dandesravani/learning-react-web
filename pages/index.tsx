import path from "path";
import { Articles } from "../components/Articles";
import { getAllPosts, PostMeta } from "./src/api";
import "../styles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  console.log(posts);
  return (
    <>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);
  console.log(posts, "POSTS");
  return {
    props: { posts },
  };
}
