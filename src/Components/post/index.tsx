import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface PostPorps {
    post: dataProps
}

interface dataProps {
    content: string
    date: string
    id: number,
    subtitle: string,
    title: string
}
export function Post({ post }: PostPorps) {

    const date = new Date(post.date)

    return (
        <article className={styles.post}>
            <Link className={styles.reactRouterLink} to={`/news/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <time>{date.toLocaleDateString()}</time>
            <p>{post.subtitle}</p>
        </article>
    )
}