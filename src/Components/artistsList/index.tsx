import { ArtistCard } from '../artistCard';
import styles from './styles.module.scss';

interface artistsListProps {
    artists: dataProps[]
}

interface dataProps {
    firstname: string
    lastname: string
    id: number
    name: string
    type: string
}

export function ArtistsList({ artists }: artistsListProps) {
    return (
        <div className={styles.container}>
            <ArtistCard />
        </div>
    )
}