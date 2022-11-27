import Head from "next/head"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Head>
                <title>Next Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}