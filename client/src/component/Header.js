import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5050/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username);
            })
        });
    }, []);

    function logout() {
        fetch('http://localhost:5050/logout', {
            method: 'POST',
            credentials: 'include',
        }).then(response => {
            if (response.ok) {
                setUsername(null);
            }
        });
        setUsername(null);
    }

    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}