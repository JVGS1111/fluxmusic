import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { Loading } from "../../Components/loading";
import { PageTitle } from "../../Components/pageTitle";
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        api.get('genre/21/news.json')
            .then(res => {
                setLoading(true)
                let arr: resProps = res.data;
                setPosts(arr.data);
            }
            )
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <main className={styles.container}>
                <PageTitle title={"Last News"} />
                <PostsList posts={posts} />
            </main>
        )
    } else {
        return (
            <main className="containerLoading">
                <Loading />
            </main>
        )

    }

}


