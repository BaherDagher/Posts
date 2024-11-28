import React, { useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/dist/esm/axios';
import Post from '../Post/Post';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // Number of posts per page

    // Fetch Posts
    async function getPosts() {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(data);
            setFilteredPosts(data);  // Set filtered posts initially as all posts
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    // Handle Search Query Change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter Posts based on Search Query
    useEffect(() => {
        if (searchQuery === "") {
            setFilteredPosts(posts); // If search is empty, show all posts
        } else {
            setFilteredPosts(
                posts.filter(post =>
                    post.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [searchQuery, posts]);

    // Calculate current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle Page Change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="py-20 min-h-[calc(100vh-124px)] px-14">
                <div className="container mx-auto px-8 md:px-0">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">All Posts</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-6">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search posts by title..."
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Display Posts */}
                    <div className="row">
                        {currentPosts.map((post) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <nav>
                            <ul className="flex space-x-2">
                                {Array.from(
                                    { length: Math.ceil(filteredPosts.length / postsPerPage) },
                                    (_, index) => index + 1
                                ).map((number) => (
                                    <li key={number}>
                                        <button
                                            onClick={() => paginate(number)}
                                            className={`px-4 py-2 rounded ${number === currentPage
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                                }`}
                                        >
                                            {number}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}