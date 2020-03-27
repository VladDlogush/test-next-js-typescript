import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import Link from 'next/link';
// import Modal from '../components/Modal';
type PostLinkProps = {
  title?: string;
};

type Posts = {
  posts: Array<object>;
};

export interface NewPost {
  title?: string | number;
  body?: string | number;
}

export interface Post extends NewPost {
  id?: string;
}

const PostLink: React.FunctionComponent<PostLinkProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/post${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Posts: React.FunctionComponent = () => {
  const posts = useSelector((state: Posts) => state.posts);

  return (
    <Layout title="Posts">
      <h1>This is Posts page ✌</h1>

      {posts.length > 0 && (
        <ul>
          {posts.map((post: Post) => (
            <div>
              <PostLink title={post.id} />
              <li key={post.id}>
                <PostItem id={post.id} title={post.title} body={post.body} />
              </li>
            </div>
          ))}
        </ul>
      )}

      {/* <Modal id={id} /> */}

      {/* <PostLink title={id} />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" /> */}
    </Layout>
  );
};
export default Posts;
