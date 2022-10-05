import React from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import { HiddenGemType } from '../../../graphql/types';
import { WHITE_COLOR } from '../../../constants/constants';

const flowerCardContainerStyle = css`
  width: 33%;
`;

const bottomContainerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const flagStyle = css`
  position: absolute;
  right: 15px;
  top: 15px;
`;

const imageStyle = css`
  border-radius: 24px;
`;

const topContainerStyle = css`
  position: relative;
`;

const titleStyle = css`
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: ${WHITE_COLOR};
  border-radius: 24px;
  padding: 12px 24px;
`;

export const HiddenGemCard = ({ hiddenGem }: { hiddenGem: HiddenGemType }) => {
  return (
    <div className={flowerCardContainerStyle}>
      <div className={topContainerStyle}>
        <Image
          src={hiddenGem.image.url}
          alt="flower"
          width="200px"
          height="100px"
          layout="responsive"
          className={imageStyle}
        />
        <div className={titleStyle}>{hiddenGem.title}</div>
        <span className={`fi fi-${hiddenGem.countryCode} ${flagStyle}`}></span>
      </div>
      <div className={bottomContainerStyle}>
        <div>{hiddenGem.description}</div>
      </div>
    </div>
  );
};
