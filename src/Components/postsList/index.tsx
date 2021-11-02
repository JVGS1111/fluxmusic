import { Post } from '../post';
import styles from './styles.module.scss';

interface PostsListProps {
    posts: dataProps[]
}
interface dataProps {
    content: string
    date: string
    id: number,
    subtitle: string,
    title: string
}

export function PostsList({ posts }: PostsListProps) {
    return (
        <div className={styles.container}>
            {
                posts.map((post: dataProps) => (
                    <Post post={post} key={post.id} />
                )
                )
            }

        </div>
    )
}