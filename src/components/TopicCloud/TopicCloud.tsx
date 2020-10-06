import React from 'react';

import { useTopicData } from '../../hooks/useTopicData';

//Style
import './TopicCloud.scss';
import '../../App.scss';

function TopicCloud() {
  const topics = useTopicData();

  const specialties = Array.from(
    new Set(
      topics.reduce(
        (result, topic) => result.concat(...topic.specialties),
        [] as string[]
      )
    )
  );

  return (
    <div className="page-content-paddingLeft page-content-paddingRight topic-cloud-container">
      <div className="topic-cloud">
        <div className="topic-cloud-header">
          <h4>Browse Education Topics by Specialty: </h4>
          <ul>
            {specialties.map((specialty) => (
              <li>{`${specialty}   `}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="topic-cloud-titles">
        {/* <ul> */}
        {topics.map((topic) => (
          <span>{`${topic.title}   `}</span>
          // <span>{topic.title}</span>
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default TopicCloud;
