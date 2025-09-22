import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest thoughts on software development, technology trends, and programming insights.',
};

export default function Blog() {
  return <h1>Blog</h1>;
}
