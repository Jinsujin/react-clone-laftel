import React from 'react';
import AppLayout from '../components/common/AppLayout';
import styled from 'styled-components';
import FinderFilter from '../components/finder/FinderFilter';
import FilterResultList from '../components/finder/FilterResultList';

const FinderWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Finder = () => {
  return (
    <AppLayout>
      <FinderWrapper>
        <FinderFilter />
        <FilterResultList
          className="result"
          animationItems={{ title: '암살교실' }}
        />
      </FinderWrapper>
    </AppLayout>
  );
};

export default Finder;
