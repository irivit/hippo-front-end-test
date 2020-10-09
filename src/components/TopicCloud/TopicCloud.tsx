import React from 'react';
import { useTopicData } from '../../hooks/useTopicData';
import './TopicCloud.scss';

let topics = useTopicData();
let specialties = Array.from(
  new Set(
    topics.reduce(
      (result, topic) => result.concat(...topic.specialties),
      [] as string[]
     
    )
  )
);
let length = specialties.length;

interface IState {
  selectedTap: string;
  position: number;
  counter: number;
}

interface IProps {
  length?:number;
}

class TopicCloud extends React.Component<IProps, IState> {
    private timer : any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedTap: specialties[3],
      position: 0,
      counter: 0
    };

}


  render() {
    
    return (
      <div className="page-content-paddingLeft page-content-paddingRight topic-cloud-container">
        <div className="topic-cloud">
        <div className="topic-cloud-header">
          <ul>
            <li className=" topic-cloud-spacialty-browse">
              Browse Education Topics by Specialty:{' '}
            </li>
            {specialties.map((specialty) => (
              <li
                className={
                  specialty === this.state.selectedTap ? 'topic-cloud-specialty-selected ' : ''
                }
              >
                <span className="section-headers2">{`${specialty}   `}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className="topic-cloud-titles section-headers2">
      
          {topics.map((topic) => (
            <span
              className={
                topic.specialties.indexOf(this.state.selectedTap) !== -1
                  ? 'topic-cloud-title-selected'
                  : ''
              }
            >{`${topic.title}   `}</span>
          ))}
  
        </div>
      </div>
    );
  }
}

export default TopicCloud;