import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Login from '../components/Login'
import { getSession } from "next-auth/react";

export default function Home({session}) {
    if (!session) return <Login />;
    return (
        <div className="">
            <Head>
                <title>Facebook</title>
            </Head>

            <Header />
            <main className="flex">
                <Sidebar />
                <Feed />
                <Widgets />
            </main>
        </div>
  )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: { session },
    };
}