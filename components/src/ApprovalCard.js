import React from 'react';

import CommentDetails  from './CommentDetail';
 import faker from 'faker';

const ApprovalCard = (props) => {
    console.log('check props',props)
    return(      
<div className="ui cards">
  <div className="card">
    <div className="content">
    {props.children}
    </div>
   <div className="extra content">
        <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
    </div>
  </div>
</div>
  
</div>
    );

};


export default ApprovalCard;