import Head from 'next/head';
import Link from 'next/link';
import styles from './pages.module.css';
import TypeSearch from '../components/TypeSearch';

const Type= ()=>{
    return(
        <div className={styles.TypeContainer}>
            <Head>
                <title>TypeSearch</title>
            </Head>
            <Link href="/name">
                <a className={styles.TypeTxt}>Search by name</a>
            </Link>

            <br/>

            <Link href="/id">
                <a className={styles.TypeTxt}>Search by ID</a>
            </Link>

            <br/>
            
            <TypeSearch/>
            <div id="reportingArea" className={styles.TypeContainer, styles.TypeTxt}>

            </div>
        </div>
    )
}

export default Type;