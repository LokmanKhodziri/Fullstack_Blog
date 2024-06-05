import Post from "./Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/post', {
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <>
            {posts.length > 0 ? (
                posts.map(post => (
                    <Post
                        key={post._id}
                        {...post}
                    />
                ))
            ) : (
                <p>No posts available</p> // Show a message if there are no posts
            )}
        </>
    );
}
