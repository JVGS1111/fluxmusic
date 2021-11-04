import styles from './styles.module.scss';

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