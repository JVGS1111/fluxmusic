import styles from './styles.module.scss';

interface ReleaseCardProps {
    release: dataProps
}

interface dataProps {
    distributor: string
    format: string
    id: number
    release_date: string
    title: string
    type: string
}


export function ReleaseCard({ release }: ReleaseCardProps) {

    const dateSplited = release.release_date.split('-')
    const dataFormated = dateSplited[0]

    return (
        <div className={styles.card}>
            <img src={`assets/releasesImgs/${release.id}.jpg`} />
            <label>{release.title},</label>
            <time>{dataFormated},</time>
            <label>Distributor: {release.distributor},</label>
            <label>{release.format}</label>
        </div>
    )
}