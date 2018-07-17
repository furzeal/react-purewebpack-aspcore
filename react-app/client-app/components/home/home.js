import React from 'react';
import PropTypes from 'prop-types';
import HomeHeader from './home-header';
import HomeContainer from './home-container';

export default function Home(props) {
  return (
    <div>
      <HomeHeader />
      <HomeContainer />
    </div>
  );
}

Home.propTypes = {
  notify: PropTypes.func,
};
