import styles from './styles.module.scss';


export function NotFound() {

    return (
        <main className={styles.container}>
            <h1>404</h1>
            <span>Page not found</span>
        </main>
    )
}