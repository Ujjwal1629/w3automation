import React from 'react';
import { Calendar, Clock, User, Share2, BookmarkPlus } from 'lucide-react';
import './BlogPost.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Dummy Data
const dummyBlogData = {
  title: "Understanding Modern JavaScript: A Deep Dive into ES6+ Features",
  subtitle: "Explore the powerful features that have transformed JavaScript into a more robust and developer-friendly language",
  content: `
    <h2>Introduction to Modern JavaScript</h2>
    <p>JavaScript has evolved significantly since the introduction of ES6 (ECMAScript 2015). This article explores the key features that have made JavaScript more powerful and easier to work with.</p>

    <h2>Arrow Functions</h2>
    <p>Arrow functions have revolutionized how we write function expressions in JavaScript. They provide a more concise syntax and handle the 'this' keyword more intuitively.</p>

    <pre><code>
    // Traditional function
    function add(a, b) {
      return a + b;
    }

    // Arrow function
    const add = (a, b) => a + b;
    </code></pre>

    <h2>Destructuring</h2>
    <p>Destructuring allows us to extract values from objects and arrays in a more elegant way. It's particularly useful when working with complex data structures.</p>

    <blockquote>
      "Modern JavaScript features like destructuring and arrow functions have made code more readable and maintainable than ever before."
    </blockquote>

    <h3>Object Destructuring Example</h3>
    <p>Let's look at how destructuring simplifies working with objects:</p>

    <pre><code>
    const user = { name: 'John', age: 30 };
    const { name, age } = user;
    </code></pre>
  `,
  author: {
    name: "Ujjwal Singh",
    role: "Senior JavaScript Developer",
    bio: "Ujjwal has been developing web applications for over 8 years, specializing in modern JavaScript frameworks and best practices. He's passionate about teaching and making complex concepts accessible to developers of all levels.",
    image: "/api/placeholder/150/150"
  },
  publishedDate: new Date('2025-01-15'),
  readTime: 8,
  featuredImage: "/api/placeholder/1200/600",
  tags: ["JavaScript", "ES6", "Web Development", "Programming"],
  relatedPosts: [
    {
      title: "Getting Started with React Hooks",
      preview: "Learn how to use React Hooks to write more efficient and cleaner React components...",
      image: "/api/placeholder/400/300"
    },
    {
      title: "TypeScript vs JavaScript: Making the Right Choice",
      preview: "A comprehensive comparison of TypeScript and JavaScript to help you decide which is best for your project...",
      image: "/api/placeholder/400/300"
    }
  ]
};

const BlogPost = () => {
  const {
    title,
    subtitle,
    content,
    author,
    publishedDate,
    readTime,
    featuredImage,
    tags,
    relatedPosts
  } = dummyBlogData;

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(publishedDate);

  return (
    <>
     <Navbar />
    <div className="blog-container">
      <div className="blog-content">
        {/* Blog Header */}
        <header className="blog-header">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="blog-tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="blog-meta">
            <span className="meta-item">
              <Calendar className="meta-icon" />
              <span>{formattedDate}</span>
            </span>
            <span className="meta-item">
              <Clock className="meta-icon" />
              <span>{readTime} min read</span>
            </span>
            <span className="meta-item">
              <User className="meta-icon" />
              <span>{author.name}</span>
            </span>
          </div>
          
          <h1 className="blog-title">{title}</h1>
          
          {subtitle && (
            <p className="blog-subtitle">{subtitle}</p>
          )}
          
          <div className="blog-actions">
            <div className="action-buttons">
              <button 
                className="action-button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: title,
                      text: subtitle,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 className="action-icon" />
                <span>Share</span>
              </button>
              <button className="action-button">
                <BookmarkPlus className="action-icon" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div className="featured-image-container">
            <img 
              src={featuredImage}
              alt={`Featured image for ${title}`}
              className="featured-image"
            />
          </div>
        )}

        {/* Blog Content */}
        <article 
          className="blog-article"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Author Bio */}
        <div className="author-bio">
          <div className="author-info">
            <img 
              src={author.image}
              alt={author.name}
              className="author-image"
            />
            <div className="author-details">
              <h3 className="author-name">{author.name}</h3>
              <p className="author-role">{author.role}</p>
              <p className="author-description">{author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h2 className="related-posts-title">Related Posts</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((post, index) => (
                <div key={index} className="related-post-card">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="related-post-image"
                  />
                  <div className="related-post-content">
                    <h3 className="related-post-title">{post.title}</h3>
                    <p className="related-post-preview">{post.preview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
     <Footer />
    </>
  );
};

export default BlogPost;