import { Post } from '../post';
import styles from './styles.module.scss';
//caso necessário já está pronto para receber estilização
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
        <div>
            {
                posts.map((post: dataProps) => (
                    <Post post={post} key={post.id} />
                )
                )
            }

        </div>
    )
}