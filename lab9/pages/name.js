import Head from 'next/head';
import Link from 'next/link';
import styles from './pages.module.css';
import NameSearch from '../components/NameSearch';

const Name= ()=>{
    return(
        <div className={styles.NameContainer}>
            <Head>
                <title>NameSearch</title>
            </Head>
            <Link href="/id">
                <a className={styles.NameTxt}>Search by ID</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.NameTxt}>Search by type</a>
            </Link>

            <br/>
            
            <NameSearch/>
            <div id="reportingArea" className={styles.NameContainer, styles.NameTxt}>

            </div>
        </div>
    )
}

export default Name;