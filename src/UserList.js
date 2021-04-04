import React from 'react';
const UserList=({name})=> {

  return (

        <li  style={{overflow: "hidden" ,textOverflow: "ellipsis",  whiteSpace: "nowrap"}}>
            {name}
        </li>

  );
}

export default UserList;
