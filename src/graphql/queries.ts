import { gql } from '@apollo/client';

export const MOST_POPULAR_QUERY = gql`
  query MostPopulars {
    mostPopulars {
      preTitle
      title
      image {
        url
      }
      fromPrice
      currency
      countryCode
      description
    }
  }
`;

export const HIDDEN_GEMS = gql`
  query Query2 {
    hiddenGems {
      countryCode
      title
      description
      image {
        url
      }
    }
  }
`;