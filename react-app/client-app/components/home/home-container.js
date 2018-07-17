import React from 'react';
import HomeSpeakersCarousel from './home-speakers-carousel';

export default function HomeContainer() {
  return (
    <div className="container-main events">
      <div className="row">
        <div className="col-12">
          <HomeSpeakersCarousel />
        </div>
      </div>
    </div>
  );
}
