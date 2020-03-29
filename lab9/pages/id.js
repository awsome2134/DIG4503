import Head from 'next/head';
import Link from 'next/link';
import styles from './pages.module.css';
import IdSearch from '../components/IdSearch';

const ID= ()=>{
    return(
        <div className={styles.IdContainer}>
            <Head>
                <title>IdSearch</title>
            </Head>
            <Link href="/name">
                <a className={styles.IdTxt}> Search by name</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.IdTxt}>Search by type</a>
            </Link>

            <br/>
            
            <IdSearch/>
            <div id="reportingArea" className={styles.IdContainer, styles.IdTxt}>

            </div>
        </div>
    )
}

export default ID;