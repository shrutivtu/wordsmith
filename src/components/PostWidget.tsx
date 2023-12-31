"use client"
import React, { useState, useEffect, FC } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services';
import { RelatedPost } from '@/types';

type Props = {
  categories?: {
    name: string,
    slug: string,
  }[],
  slug?: string
}

export const PostWidget:FC<Props> = ({ categories = [], slug = '' }) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else{
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className='bg-light-gray shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        { slug ? 'Related Posts' : 'Recent Posts' }
      </h3>
      {relatedPosts.map((post: RelatedPost, index) => (
        <div key={post.title} className={`flex flex-items-center w-full mb-4 ${(index === relatedPosts.length - 1) ? 'border-b-0' : 'border-b'}`}>
          <div className='w-16 flex-none'>
            <img 
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
            {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
};