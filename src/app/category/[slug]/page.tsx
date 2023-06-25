"use client"
import React from 'react';
// import { useRouter } from 'next/navigation';
import { getCategories, getCategoryPost } from '@/services';
import { PostCard, Categories, Loader } from '@/components';

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
          {posts.map((post, index) => {
            return <PostCard key={index} post={post.node} />
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
