"use client"
import React from "react";
import { getPosts, getPostDetails } from "@/services";
// import { useRouter } from "next/navigation";
import {
  PostDetail,
  Author,
  CommentsForm,
  Comments,
  PostWidget,
  Categories,
  Loader
} from "@/components";
import { Category, PostDetailType } from "@/types";

interface PramsType{
  params: {
    slug: string
  }
}

const PostDetails = async ({ params }: PramsType) => {
  // const router = useRouter();
  // if(router.isFallback){
  //   return <Loader />
  // }
  const post: PostDetailType = await getPostDetails(params.slug);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {post ? (
          <>
            <div className="col-span-1 lg:col-span-8">
              <PostDetail post={post} />
              <Author author={post.author} />
              {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map((category: any) => {
                    return category.slug
                  })}
                />
                <Categories />
              </div>
            </div>
          </>
        ) : (
          <>No detail available</>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
