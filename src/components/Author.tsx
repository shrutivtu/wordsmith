import React, { FC}  from 'react';
import Image from 'next/image';
// import { grpahCMSImageLoader } from '../util';

type AuthorProps = {
  author: {
    name: string;
    bio: string;
    photo: {
      url: string;
    };
  };
};

export const Author: FC<AuthorProps> = ({ author }) => {
  return (
    <div className="w-full mt-20 mb-8 p-12 relative rounded-lg bg-light-blue bg-opacity-20 flex justify-center">
      <div className="w-1/2 flex justify-end">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <div className='w-1/2 pl-5 pt-4'>
        <h3 className="mt-4 mb-4 text-xl font-bold text-gray">{author.name}</h3>
        <p className="text-ls text-gray">{author.bio}</p>
      </div>
    </div>
  );
};




