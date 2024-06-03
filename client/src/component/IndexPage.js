import { useEffect, useState } from "react";
import Post from "./Post";
export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/post', {
            credentials: 'include',
        }).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>

            {
                posts.length > 0 && posts.map(post => (
                    <Post {...post} />
                ))
            }

        </>
    );
}