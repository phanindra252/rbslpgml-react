// BlogDetail.jsx
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogdata"; // Adjust the import path if necessary

const BlogDetail = () => {
  const { id } = useParams(); // Get the post ID from URL parameters
  const postId = parseInt(id); // Convert id to an integer

  // Find the specific post based on id
  const post = blogPosts[postId];

  if (!post) {
    return <div className="container mx-auto p-6">Post not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <p>{post.content}</p> {/* Display specific content for the blog post */}
    </div>
  );
};

export default BlogDetail;
