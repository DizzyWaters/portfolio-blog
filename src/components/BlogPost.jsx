function BlogPost({ post, isOpen, onToggle }) {
  return (
    <article className={`blog-card ${isOpen ? "expanded" : ""}`}>

      <p className="blog-meta">
        {post.date} | {post.category}
      </p>

      <h3>{post.title}</h3>

      <p>{post.excerpt}</p>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`post-content-${post.id}`}
      >
        {isOpen ? "Close Article" : "Read Article"}
      </button>

      {isOpen && (
        <div
          id={`post-content-${post.id}`}
          className="blog-content"
        >
          <p>{post.content}</p>
        </div>
      )}

    </article>
  );
}

export default BlogPost;
