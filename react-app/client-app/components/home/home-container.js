import React from 'react';
import HomeSessionCount from './home-session-count';
import HomeSessionFilter from './homes-session-filter';
import HomeFilterView from './home-filter-view';
import HomeSessions from './home-sessions';

export default function HomeContainer(props) {
  if (props.isLoading) {
    return (
      <div>
        <i>
...Loading
        </i>
      </div>
    );
  }

  return (
    <div className="container-main events">
      <div className="row">
        <div className="col-12">
          <HomeSessionCount />
          <HomeSessionFilter />
          <HomeFilterView />
          <HomeSessions
            sessions={props.sessions}
            updateSession={rec => props.updateSession(rec)}
          />
        </div>
      </div>
    </div>
  );
}
