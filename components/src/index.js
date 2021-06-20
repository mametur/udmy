 import React from 'react';
 import ReactDOM from 'react-dom';
 import faker from 'faker';

 import CommentDetails  from './CommentDetail';
 import ApprovalCard from './ApprovalCard';
 
 const App = () => {
     return (
        <div className="ui container comments">
        <ApprovalCard>
            < CommentDetails name={'azad'} date={'Today 060:PM'} comment={'Nice blog!'}  fakerApi={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            < CommentDetails name={'jan'} date={'Today 060:PM'} comment={'Nice blog!'}  fakerApi={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            < CommentDetails name={'ban'} date={'Today 060:PM'} comment={'Nice blog!'}  fakerApi={faker.image.avatar()}/>
        </ApprovalCard>
        </div>
     )
 };

 ReactDOM.render(<App />, document.getElementById('root'))