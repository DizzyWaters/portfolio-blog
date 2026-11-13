import { useState } from 'react';

import { posts } from '../data/posts.js';
import BlogPost from './BlogPost.jsx';

function Blog() {
  // React state
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openPostId, setOpenPostId] = useState(null);

  // Get available categories
  const categories = [
    'All',
    ...new Set(posts.map((post) => post.category))
  ];

  // Filter articles
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesCategory =
      category === 'All' || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog">
      <h2>Developer Blog</h2>

      <p>
        Articles about programming and software development.
      </p>

      <div className="blog-controls">

        <div className="blog-control">
          <label htmlFor="blog-search">
            Search Articles
          </label>

          <input
            id="blog-search"
            type="search"
            placeholder="Search by title..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="blog-control">
          <label htmlFor="blog-category">
            Category
          </label>

          <select
            id="blog-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === 'All' ? 'All categories' : item}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="blog-container">
        {filteredPosts.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              post={post}
              isOpen={openPostId === post.id}
              onToggle={() =>
                setOpenPostId((current) =>
                  current === post.id ? null : post.id
                )
              }
            />
          ))
        )}
      </div>

    </section>
  );
}

export default Blog;
