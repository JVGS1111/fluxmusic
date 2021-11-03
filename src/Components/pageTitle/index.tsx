import styles from './styles.module.scss';

interface PageTitleProps {
    title: string
}

export function PageTitle({ title }: PageTitleProps) {
    return (
        <h2 className={styles.title}>{title}</h2>
    )
}