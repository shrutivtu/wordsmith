import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '@/components';
import { getPosts } from '@/services';
import { FeaturedPosts } from '@/sections';

export default async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Wordsmith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts && posts.map((post, index) => {
            return <PostCard title={post.node.title} excerpt={post.node.excerpt} slug={post.node.slug} key={index} name={post.node.author.name} authorURL={post.node.author.photo.url} featuredImage={post.node.featuredImage} createdAt={post.node.createdAt} />
          })}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
