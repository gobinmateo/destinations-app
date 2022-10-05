import Image from 'next/image';
import { css } from '@emotion/css';
import {
  BLACK_COLOR,
  GRAY_COLOR,
  LIGHT_GREEN_COLOR,
  WHITE_COLOR,
} from '../../../../constants/constants';

const imageWrapperStyle = css`
  width: 100%;
  height: 400px;
  position: relative;
`;

const heroWrapperStyle = css`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const heroTitleStyle = css`
  font-weight: 500;
  color: ${WHITE_COLOR};
  margin-bottom: 48px;
`;

const heroContentStyle = css`
  display: flex;
  background-color: ${WHITE_COLOR};
  align-items: center;
  border-radius: 12px;
  padding: 12px;
`;

const whereToWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: flex-start;
`;

const inputStyle = css`
  background-color: transparent;
  border: 0;
  color: ${BLACK_COLOR};
`;

const lineStyle = css`
  width: 2px;
  height: 50px;
  background-color: ${GRAY_COLOR};
  margin-right: 8px;
`;

const fromWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: flex-start;
`;

const toWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const buttonWrapperStyle = css`
  width: 20%;
`;

const buttonStyle = css`
  background-color: ${LIGHT_GREEN_COLOR};
  border: none;
  padding: 12px;
  border-radius: 8px;
`;

export const Hero = () => {
  return (
    <div className={imageWrapperStyle}>
      <Image src="/header_image.jpg" alt="me" layout="fill" />
      <div className={heroWrapperStyle}>
        <h2 className={heroTitleStyle}>Find your perfect experience</h2>
        <div className={heroContentStyle}>
          <div className={whereToWrapperStyle}>
            <label>Where to go</label>
            <input placeholder="Search for place" className={inputStyle} />
          </div>
          <div className={lineStyle}></div>
          <div className={fromWrapperStyle}>
            <label>From</label>
            <input placeholder="Add dates" className={inputStyle} />
          </div>
          <div className={lineStyle}></div>
          <div className={toWrapperStyle}>
            <label>To</label>
            <input placeholder="Add dates" className={inputStyle} />
          </div>
          <div className={buttonWrapperStyle}>
            <button className={buttonStyle}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
