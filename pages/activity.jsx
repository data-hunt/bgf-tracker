import { fetcher } from '@/lib/fetch';
import { Container, Wrapper, Spacer } from '@/components/Layout';
import Head from 'next/head';
import useSWR from 'swr';
import styles from '@/page-components/Index/Hero.module.css';

const ActivityPage = () => {
  const { data, error } = useSWR(
    'http://api-devnet.magiceden.dev/v2/wallets/4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD/activities?offset=0&limit=100',
    fetcher
  );

  return (
    <>
      <Head>
        <title>Wallet Activity</title>
      </Head>
      <Wrapper className={styles.root}>
        <div>
          <h1>
            <span>Wallet Activity</span>
          </h1>
          <Container justifyContent="center">
            <div>Data Table Here</div>
          </Container>
          <p>
            A bullish dashboard built for bullish holders. Designed for analysis
            of the Fearless Bulls Club Solana NFT index fund.
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default ActivityPage;
