import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { api } from '../../services/api';
import { Loading } from '../../Components/loading';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';

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

export function News() {
    const { id } = useParams<any>();
    const [post, setPost] = useState<dataProps>();
    const [loading, setLoading] = useState(false)
    let history = useHistory();

    function findPost(post: dataProps) {
        if (post.id == id) {
            return { ...post };
        }
    }

    useEffect(() => {
        api.get('/genre/21/news.json')
            .then(res => {
                setLoading(true);
                let arr: resProps = res.data;
                let newArr = arr.data.filter(findPost);//buscando o post no arr
                if (newArr.length === 0) {
                    history.push('/404')
                    //se o post não foi encontrado o usuario é redirecionado para notFound.
                } else {
                    const [obj] = newArr;
                    setPost(obj);
                }
            }
            )
        setLoading(false);
    }, [id])

    //normalmente eu utilizaria uma query na api (exemplo abaixo) para chamar o post que eu quero porém devido as limitações dos endpois fiz uma "gambiarra" para obter o post
    //http://api.music-story.com/en/genre/21/news/search?id=10372
    let date;
    if (post) {
        date = new Date(post?.date)
    }

    if (loading) {
        return (
            <main className={styles.container}>
                <h2>{post?.title}</h2>
                <h3>{post?.subtitle}</h3>
                <time>{date?.toLocaleString()}</time>
                <div
                    className={styles.postContent}
                    dangerouslySetInnerHTML={{ __html: post ? post.content : ' ' }}>

                </div>
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