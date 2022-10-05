import { useQuery } from '@apollo/client';
import { css } from '@emotion/css';
import { GRAY_COLOR } from '../../../../constants/constants';
import { HIDDEN_GEMS } from '../../../../graphql/queries';
import { HiddenGemType } from '../../../../graphql/types';
import { HiddenGemCard } from '../../../core/HiddenGemCard/HiddenGemCard';

const hiddenGemsSyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 32px 0px;
`;

const horizontalLineStyle = css`
  width: 40%;
  background-color: ${GRAY_COLOR};
  height: 1px;
`;

const subtitleStyle = css`
  width: 20%;
  font-weight: 500px;
  text-align: center;
`;

const cardsWrapperStyle = css`
  display: flex;
  overflow: auto;
  gap: 32px;
  width: 100%;
  flex-wrap: nowrap;
`;

export const HiddenGems = () => {
  const { data: hiddenGemsData } = useQuery(HIDDEN_GEMS);

  if (!hiddenGemsData) {
    return <div>Loading...</div>;
  }

  const { hiddenGems } = hiddenGemsData;

  return (
    <>
      <div className={hiddenGemsSyle}>
        <HorizontalLine />
        <h2 className={subtitleStyle}>Hidden gems</h2>
        <HorizontalLine />
      </div>
      <div className={cardsWrapperStyle}>
        {(hiddenGems as HiddenGemType[]).map((hiddenGem, index: number) => (
          <HiddenGemCard key={index} hiddenGem={hiddenGem} />
        ))}
      </div>
    </>
  );
};

const HorizontalLine = () => <div className={horizontalLineStyle}></div>;
