import React from 'react';

const Display = ({ users }) => {
  return (
    <>
      {users.length ? (
        users.map((user) => {
          return (
            <div key={user.email}>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
            </div>
          );
        })
      ) : (
        <h2>No Users Submitted Yet!</h2>
      )}
    </>
  );
};

export default Display;
