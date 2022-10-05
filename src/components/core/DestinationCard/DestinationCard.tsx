import React from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import { DestinationType } from '../../../graphql/types';
import { BLACK_COLOR, PRIMARY_COLOR } from '../../../constants/constants';

const flowerCardContainerStyle = css`
  width: 25%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  height: 380px;
`;

const bottomContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const titleStyle = css`
  color: ${BLACK_COLOR};
  font-size: 16px;
  line-height: 15px;
  padding-bottom: 8px;
`;

const preTitleStyle = css`
  color: ${BLACK_COLOR};
  font-size: 16px;
  opacity: 0.7;
  padding-bottom: 12px;
`;

const imageWrapperStyle = css`
  position: relative;
`;

const imageStyle = css`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const flagStyle = css`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const priceStyle = css`
  position: absolute;
  bottom: 24px;
  left: 24px;
  color: ${PRIMARY_COLOR};
`;

export const DestinationCard = ({
  destination,
}: {
  destination: DestinationType;
}) => {
  return (
    <div className={flowerCardContainerStyle}>
      <div className={imageWrapperStyle}>
        <Image
          src={destination.image.url}
          alt="destination"
          width="200px"
          height="100px"
          layout="responsive"
          className={imageStyle}
        />
        <span
          className={`fi fi-${destination.countryCode} ${flagStyle}`}
        ></span>
      </div>
      <div className={bottomContainerStyle}>
        <div className={preTitleStyle}>{destination.preTitle}</div>
        <div className={titleStyle}>{destination.title}</div>
        <div>{destination.description}</div>
      </div>
      <div className={priceStyle}>
        From {destination.currency} {destination.fromPrice}
      </div>
    </div>
  );
};
