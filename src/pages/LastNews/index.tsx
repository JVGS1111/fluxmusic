import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { PostsList } from "../../Components/postsList"
import styles from './styles.module.scss';

interface resProps {
    code: number
    count: number,
    currentPage: number
    data: dataProps[]
    pageCount: number,
    version: string
}
interface dataProps {
    content: string
    date: string
    id: number,
    subtitle: string,
    title: string
}

export function LastNews() {

    const [posts, setPosts] = useState<dataProps[]>([])

    useEffect(() => {
        api.get('genre/21/news.json')
            .then(res => {
                let arr: resProps = res.data;
                setPosts(arr.data);
                console.log(arr.data);
            }
            )
    }, [])
    return (
        <main>
            <h2 className={styles.title}>Last News</h2>
            <PostsList posts={posts} />
        </main>
    )
}


