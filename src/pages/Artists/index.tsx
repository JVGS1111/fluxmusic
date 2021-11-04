import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { ArtistsList } from '../../Components/artistsList';
import { Loading } from '../../Components/loading';
import { PageTitle } from '../../Components/pageTitle';
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
    firstname: string
    lastname: string
    id: number
    name: string
    type: string
}

export function ArtistsPage() {

    const [artists, setArtists] = useState<dataProps[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        api.get('genre/1/artists.json')
            .then(res => {
                setLoading(true)
                let arr: resProps = res.data;
                setArtists(arr.data);
            }
            )
        setLoading(false)
    }, [])
    if (loading) {
        return (
            <main className={styles.container}>
                <PageTitle title={"Best artists"} />
                <ArtistsList artists={artists} />
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