import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function Post({ post }) {

    return (
        <div className="w-full px-4 mb-6 pb-5 rounded-lg custom-product mx-auto border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
        <Link to={`/post-details/${post.id}`} className="block">
            <div className="p-4 bhg-wite rounded-lg">
                <h1 className="text-lg font-semibold text-gray-800">{post.title}</h1>
                <p className="text-sm text-gray-600 mt-2">
                        {post.body.substring(0, 100)}... {/* Display a snippet of post body */}
                    </p>
            </div>
        </Link>
    </div>


    )
}
