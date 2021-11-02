import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className={styles.container}>
                <Link className="react-router-Link" to="/"><h2>FluxMusic</h2></Link>
                <ul className={styles.navBar}>
                    <Link className="react-router-Link" to="/news"><li>Last news</li></Link>
                    <Link className="react-router-Link" to="/artists"><li>Best artists</li></Link>
                    <Link className="react-router-Link" to="/releases"><li>Releases</li></Link>
                    <Link className="react-router-Link" to="/"><li>Home</li></Link>
                </ul>
            </div>
        </header>
    )
}

