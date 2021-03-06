import styles from './styles.module.scss';

export function Home() {
    return (
        <main className={styles.home}>
            <img src="assets/homeMusicBanner.png" alt="banner" />
            <div className={styles.homeContent}>
                <h2>WELCOME</h2>
                <p>This is where you'll find your new favorite album. <strong>FLUXMUSIC</strong> is the place to discover new artists, albums and songs and stay on top of everything that happens in the music world. Here we go!</p>
            </div>
        </main>
    );
}