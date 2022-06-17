import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper className={styles.root}>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Fearless Bulls</span>
          <span className={styles.mongodb}>NFT</span>
          <span>App</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/activity">
              <ButtonLink className={styles.button}>Launch App</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://t.co/mYEQMwWvzj"
              type="secondary"
              className={styles.button}
            >
              Join Discord
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
          A bullish dashboard built for bullish holders. Designed for analysis
          of the Fearless Bulls Club Solana NFT index fund.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
