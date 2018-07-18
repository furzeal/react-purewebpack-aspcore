import React, { Component } from 'react'

import { connect } from 'react-redux'
import SpeakersHeader from './speakers-header';
import SpeakerList from './speaker-list';

import { speakersFetchData } from '../../../redux/actions/speakers'


class Speakers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      appData: [],
    }
  }

  componentDidMount() {
    this.props.speakersFetchData()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <span>
          <div>
            <SpeakersHeader />
          </div>
          <i>
Loading...
          </i>
        </span>
      )
    }
    if (this.props.hasErrored) {
      return (
        <span>
          <b>
Failed to load data:
            {this.props.errorMessage}
          </b>
        </span>
      )
    }

    return (
      <div>
        <SpeakersHeader />
        <SpeakerList speakers={this.props.speakers} />
      </div>
    );
  }
}

Speakers.propTypes = {}
Speakers.defaultProps = {}

const mapStateToProps = state => ({
  speakers: state.speakers.data,
  hasErrored: state.speakers.hasErrored,
  isLoading: state.speakers.isLoading,
  errorMessage: state.speakers.errorMessage,
})

export default connect(mapStateToProps, { speakersFetchData })(Speakers)
