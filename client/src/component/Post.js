import { formatISO9075 } from "date-fns";

export default function Post({ title, summary, cover, content, createdAt, author }) {

    return (
        <div className="post">
            <div className="image">
                <img src={cover} alt={title} />
            </div>
            <div className="texts">
                <h2>{title}</h2>
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