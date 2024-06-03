import { formatISO9075 } from "date-fns";

export default function Post({ title, summary, cover, content, createdAt }) {
    return (
        <div className="post">
            <div className="image">
                <img src="https://lifehacker.com/imagery/articles/01HY42WNG2R4DTVJ1RM69VM3TX/hero-image.fill.size_1200x675.jpg" alt="" />
            </div>
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="author">LokmanKhodziri</a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}
