export type Author = {
    bio: string;
    name: string;
    id?: string;
    photo: {
        url: string;
    };
};

export type FeaturedImage = {
    url: string;
};

export type Category = {
        name: string;
        slug: string;
};

export type PostNode = {
    author: Author;
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: FeaturedImage | string;
    // featuredImage: string;
    categories: Category[];
    name?: string,
    authorURL?: string,
};

export type Post = {
    cursor: string;
    node: PostNode;
};  

export type RelatedPost = {
    createdAt: string,
    featuredImage: {
        url: string
    },
    slug: string,
    title: string
}

export type PostDetailType = {
    title: string;
    excerpt: string;
    featuredImage: {
        url: string;
    };
    author: {
        name: string;
        bio: string;
        photo: {
            url: string;
        };
    };
    createdAt: string;
    slug: string;
    content: {
        raw: any;
    };
    categories: Category[]
}

export type CommentObjtype = {
    name: string, 
    email: string, 
    comment: string, 
    slug: string
} 