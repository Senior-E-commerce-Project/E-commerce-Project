import React from 'react';

const AllUsers = (props) => {
  return (
    <div>
      {props.user.map((el) => (
        <div >
          <div>
            <ul>
              <li>{el.props.UserName}</li>
              <li>{}</li>
              <li>{}</li>
              <li>{}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;

