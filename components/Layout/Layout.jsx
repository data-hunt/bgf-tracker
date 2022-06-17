import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FBC Dashboard App</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="fbc-dash-app is an analytical app developed for Fearless Bulls Club members to analyze Solana NFT holding."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="fbc-dash-app is an analytical app developed for Fearless Bulls Club members to analyze Solana NFT holding."
        />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
