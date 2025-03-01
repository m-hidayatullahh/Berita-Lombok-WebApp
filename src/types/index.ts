export interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryName: string;
  author: string;
  authorImage: string;
  imageUrl: string;
  time: string;
  comments: number;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
  channel: string;
  channelImage: string;
  time: string;
}

export interface Gallery {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}