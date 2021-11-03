import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { ArtistsList } from '../../Components/artistsList';
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

    useEffect(() => {
        api.get('genre/1/artists.json')
            .then(res => {
                let arr: resProps = res.data;
                setArtists(arr.data);
                console.log(res.data);//apagar
            }
            )
    }, [])
    return (
        <main>
            <ArtistsList artists={artists} />
        </main>
    )
}