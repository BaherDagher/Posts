import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // For navigation

  // Fetch post details
  async function getPostDetails() {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPostDetails(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Fetch comments
  async function getPostComments() {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setPostComments(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getPostDetails();
    getPostComments();
  }, [id]);

  return (
    <div className="container px-8 md:px-0 py-8">
   <button
  onClick={() => navigate(-1)} // Go back to the previous page
  className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition fixed top-20 left-4"
>
  Back
</button>

      {/* Post Details */}
      {postDetails && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{postDetails.title}</h1>
          <p className="text-lg text-gray-700">{postDetails.body}</p>
        </div>
      )}

      {/* Comments Section */}
      <div className="bg-gray-100 shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
        {postComments.length > 0 ? (
          <ul className="space-y-4">
            {postComments.map((comment) => (
              <li key={comment.id} className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-bold text-gray-800">{comment.name}</h3>
                <p className="text-sm text-gray-600">{comment.email}</p>
                <p className="text-gray-700 mt-2">{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Loading ...</p>
        )}
      </div>
    </div>
  );
}