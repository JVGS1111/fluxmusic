import { ReleaseCard } from '../releaseCard';
import styles from './styles.module.scss';

interface ReleasesListProps {
    releases: dataProps[]
}

interface dataProps {
    distributor: string
    format: string
    id: number
    release_date: string
    title: string
    type: string
}

export function ReleasesList({ releases }: ReleasesListProps) {
    return (
        <div>
            {
                releases.map(release => (
                    <ReleaseCard key={release.id} release={release} />
                ))
            }

        </div>
    )
}