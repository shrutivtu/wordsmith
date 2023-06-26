"use client"
import React from 'react';
// import { useRouter } from 'next/navigation';
import { getCategories, getCategoryPost } from '@/services';
import { PostCard, Categories, Loader } from '@/components';
import { Post } from '@/types';

const CategoryPost = async ({ params }: any) => {
  // const router = useRouter();
  const posts = await getCategoryPost(params.slug);
  const categories = await getCategories();


  // if (router.isFallback) {
  //   return <Loader />;
  // }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: Post, index: number) => {
            return <PostCard key={index} title={post.node.title} excerpt={post.node.excerpt} slug={post.node.slug} name={post.node.name} authorURL={post.node.authorURL} featuredImage={post.node.featuredImage} createdAt={post.node.createdAt} />
          })}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;
