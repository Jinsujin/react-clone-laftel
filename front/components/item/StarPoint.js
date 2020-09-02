import React from 'react';
import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';

const StarPointWrap = styled.div``;

const maxValue = 5;

//D5D5D5
const starIcons = [
  <StarFilled style={{ color: '#D5D5D5' }} />,
  <StarFilled style={{ color: '#D5D5D5' }} />,
  <StarFilled style={{ color: '#D5D5D5' }} />,
  <StarFilled style={{ color: '#D5D5D5' }} />,
  <StarFilled style={{ color: '#D5D5D5' }} />,
];

const StarPoint = ({ point }) => {
  return (
    <StarPointWrap>
      {starIcons.map((element, index) => {
        return index < point ? (
          <element.type
            {...element.props}
            style={{
              color: '#FFDA01',
            }}
          />
        ) : (
          element
        );
      })}
    </StarPointWrap>
  );
};

export default StarPoint;
