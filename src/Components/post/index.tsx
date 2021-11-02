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
            <h2>{post.title}</h2>
            <time>{date.toLocaleDateString()}</time>
            <p>{post.subtitle}</p>
        </article>
    )
}