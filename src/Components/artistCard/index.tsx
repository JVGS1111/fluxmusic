import styles from './styles.module.scss';
import img from '../../assets/artistsImgs/1.jpeg'

interface artistCardProps {
    artist: dataProps
}

interface dataProps {
    firstname: string
    lastname: string
    id: number
    name: string
    type: string
}


export function ArtistCard({ artist }: artistCardProps) {

    return (
        <div className={styles.card}>
            <img src={`/assets/artistsImgs/${artist.id}.jpg`} />
            <label>{artist.name}</label>
        </div>
    )
}