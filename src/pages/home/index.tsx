import type { NextPage } from 'next';
import { css } from '@emotion/css';
import { Hero } from '../../components/features/home/Hero/Hero';
import { PopularDestinations } from '../../components/features/home/PopularDestinations/PopularDestinations';
import { HiddenGems } from '../../components/features/home/HiddenGems/HiddenGems';

const contentWrapper = css`
  padding: 48px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className={contentWrapper}>
        <PopularDestinations />
        <HiddenGems />
      </div>
    </div>
  );
};

export default Home;
