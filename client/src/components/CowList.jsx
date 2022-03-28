import React from 'React';
import CowEntry from './CowEntry.jsx';

var CowList = (props) => {
  return (
    <div>
      {
        props.cows.map((cow, index) => (
         <CowEntry key={index} cow={cow} />
        ))
      }
    </div>
  )
}

export default CowList;