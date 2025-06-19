import React from "react";
import "./Blog.css";

const blogPosts = [
  { title: "Why React is Awesome", date: "June 2025", link: "#" },
  { title: "Tips for Beginners", date: "May 2025", link: "#" },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <a href={post.link}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
