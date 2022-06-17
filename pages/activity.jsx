import { ActivityFeed } from '@/page-components/ActivityFeed';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ActivityFeed />
    </>
  );
};

export default LoginPage;
