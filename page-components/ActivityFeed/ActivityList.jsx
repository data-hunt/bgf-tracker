import { Button } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
// import { Post } from '@/components/Transaction';
import { Text } from '@/components/Text';
// import { usePostPages } from '@/lib/post';
import Link from 'next/link';
import styles from './ActivityList.module.css';
import useSWR from 'swr';
import axios from 'axios';
import { fetcher } from '@/lib/fetch';
// http://api-devnet.magiceden.dev/v2/wallets/4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD/activities?offset=0&limit=100

const fetcher2 = (url) => axios.get(url).then((response) => response.data);

export default function ActivityList() {
  // const baseURL = `${process.env.BASE_API_URL}`;
  // const endURL = '/activities?offset=0&limit=100';
  // const nftWallet = `${process.env.NFT_WALLET_ADDRESS}`;
  // const fullURL = baseURL + nftWallet + endURL;

  const { data } = useSWR(
    'http://api-devnet.magiceden.dev/v2/wallets/4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD/activities?offset=0&limit=100',
    fetcher2
  );

  return (
    <div>
      <h1>Activity</h1>
      <div>
        <p>{data}</p>
      </div>
    </div>
  );
}
