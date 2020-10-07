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
      {/* <div className="topic-cloud"> */}
        <div className="topic-cloud-header topic-cloud">
          <ul>
           <p className="education-topic-ul dynamic mc-mx-2 d-block d-sm-inline-block">Browse Education Topics by Specialty: </p>
            {specialties.map((specialty) => (
              <li className ="dynamic-li mc-mx-2 mc-my-1 d-inline-block"><a className="dynamic-li-a">{`${specialty}   `}</a></li>
            ))}
          </ul>
        </div>
      {/* </div> */}
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
