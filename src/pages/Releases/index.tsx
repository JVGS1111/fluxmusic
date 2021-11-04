import { useEffect, useState } from "react"
import { api } from "../../api/api"
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

    useEffect(() => {
        api.get('genre/1/releases.json')
            .then(res => {
                let arr: resProps = res.data;
                console.log(res.data);

                setReleases(arr.data);
            }
            )
    }, [])

    return (

        <main className={styles.container}>
            <PageTitle title={"Releases"} />
            <ReleasesList releases={releases} />
        </main>
    )
}