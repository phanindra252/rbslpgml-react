// Blog.jsx
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogdata"; // Adjust the import path if necessary

const Blog = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const showPosts = useCallback((page) => {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    setVisiblePosts(blogPosts.slice(start, end));
  }, []);

  const setupPagination = () => {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    let paginationArray = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationArray.push(
        <button
          key={i}
          className={`pagination-link px-4 py-2 border ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return paginationArray;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    showPosts(page);
  };

  useEffect(() => {
    showPosts(currentPage);
  }, [currentPage, showPosts]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, index) => {
          const absoluteIndex = (currentPage - 1) * postsPerPage + index; // Calculate the absolute index
          return (
            <div
              key={absoluteIndex}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link
                  to={`/blog-detail/${absoluteIndex}`} // Pass the absolute index to the URL
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <nav className="inline-flex space-x-2">{setupPagination()}</nav>
      </div>
    </div>
  );
};

export default Blog;
