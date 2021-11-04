import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { Loading } from "../../Components/loading";
import { PageTitle } from "../../Components/pageTitle";
import { ReleasesList } from "../../Components/releasesList";
import styles from './styles.module.scss';

interface resProps {
    data: dataProps[]
}
interface dataProps {
    distributor: string
    format: string
    id: number
    release_date: string
    title: string
    type: string
}
export function Releases() {

    const [releases, setReleases] = useState<dataProps[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        api.get('genre/1/releases.json')
            .then(res => {
                setLoading(true);
                let arr: resProps = res.data;
                setReleases(arr.data);
            }
            )
        setLoading(false);
    }, [])



    if (loading) {
        return (

            <main className={styles.container}>
                <PageTitle title={"Releases"} />
                <ReleasesList releases={releases} />
            </main>
        )
    } else {
        return (
            <main className="containerLoading">
                <Loading />
            </main>

        )
    }
}