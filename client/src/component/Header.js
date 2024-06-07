import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5050/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        });
    }, [setUserInfo]);

    function logout() {
        fetch('http://localhost:5050/logout', {
            method: 'POST',
            credentials: 'include',
        }).then(response => {
            if (response.ok) {
                setUserInfo(null);
            }
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <>
                        <span>Hello, {username}</span>
                        <Link to="/create">Create New Post</Link>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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