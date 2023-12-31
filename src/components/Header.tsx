"use client"
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { Category } from '@/types';

export const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <section className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-gray-900">Word Smith</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: Category,index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-gray ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </section>
  );
};