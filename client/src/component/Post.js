import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
    console.log({ title, summary, cover, content, createdAt, author }); // Add this line for debugging

    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={`http://localhost:5050${cover}`} alt={title} />
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="author">{author.username}</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}