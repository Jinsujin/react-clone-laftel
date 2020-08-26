import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';

const FilterResultListWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 260px;
  width: calc(100% - 260px);
  padding-left: 2rem;

  p {
    color: #494c62;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    span {
      font-size: 1.7rem;
      font-weight: 500;
      color: #816bff;
    }
  }
`;

const FilterResultList = ({ animationItems }) => {
  return (
    <FilterResultListWrapper>
      <p>
        총 <span>5,909</span>개의 작품이 검색되었어요!
      </p>
      <section>
        <Row gutter={24}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </section>
    </FilterResultListWrapper>
  );
};

export default FilterResultList;
