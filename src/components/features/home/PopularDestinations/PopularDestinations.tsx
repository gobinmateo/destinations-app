import { useQuery } from '@apollo/client';
import { css } from '@emotion/css';
import { MOST_POPULAR_QUERY } from '../../../../graphql/queries';
import { DestinationType } from '../../../../graphql/types';
import { DestinationCard } from '../../../core/DestinationCard/DestinationCard';

const cardsWrapperStyle = css`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: nowrap;
`;

export const PopularDestinations = () => {
  const { data: popularDestinationsData } = useQuery(MOST_POPULAR_QUERY);

  if (!popularDestinationsData) {
    return <div>Loading...</div>;
  }

  const { mostPopulars } = popularDestinationsData;

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: 48, fontWeight: 500 }}>
        Some of our most popular destinations
      </h2>
      <div className={cardsWrapperStyle}>
        {(mostPopulars as DestinationType[]).map(
          (destination, index: number) => (
            <DestinationCard key={index} destination={destination} />
          )
        )}
      </div>
    </>
  );
};
