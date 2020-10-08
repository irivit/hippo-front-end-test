import React, { Component } from 'react';
import { useTopicData } from '../../hooks/useTopicData';
import './TopicCloud.scss';

let topics = useTopicData();
let specialties = Array.from(
  new Set(
    topics.reduce((result, topic) => {
      if (Array.isArray(result)) return [...result, ...topic.specialties];
      else return [...result.specialties, ...topic.specialties];
    })
  )
);


export default class Topic extends Component {
  state = {
    selectedSpecialty: specialties[0],
    position: 0
  };

  setInterval;

  startInterv = () => {
    this.setInterval = setInterval(() => {
      console.log(`contador`, this.state.position);
      if (this.state.position >= specialties.length - 1)
        this.setState({ position: 0, selectedSpecialty: specialties[0] });
      else
        this.setState({
          position: this.state.position + 1,
          selectedSpecialty: specialties[this.state.position + 1]
        });
    }, 2500);
  };
  stopInterv = () => {
    clearInterval(this.setInterval);
  };

  componentDidMount() {
    this.startInterv();
  }

  componentWillUnmount() {
    this.stopInterv();
  }

  render() {
    return (
      <div className="page-content-paddingLeft page-content-paddingRight topic-cloud-container">
        <div className="topic-cloud">
          <div className="topic-cloud-header">
            <ul>
              <li className="topic-cloud-spacialty-browse">
                Browse Education Topics by Specialty:{' '}
              </li>
              {specialties.map((specialty, i) => (
                <li
                  className={
                    specialty === this.state.selectedSpecialty
                      ? 'topic-cloud-title-selected'
                      : ''
                  }
                  onMouseLeave={() => {
                    this.startInterv();
                  }}
                  onMouseEnter={() => {
                    this.stopInterv();

                    this.setState({
                      position: i,
                      selectedSpecialty: specialties[i]
                    });
                  }}
                >
                  <span className="topic-cloud-header-specialities">{`${specialty}   `}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="topic-cloud-titles">

          {topics.map((topic) => (
            <span
              className={
                topic.specialties.indexOf(this.state.selectedSpecialty) !== -1
                  ? 'topic-cloud-specialty-selected'
                  : ''
              }
            >{`${topic.title}   `}</span>
          ))}
        </div>
      </div>
    );
  }
}
