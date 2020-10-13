import React from 'react';

const Authenticate=()=> {
    //if (process.env.REACT_APP_A==process.env.REACT_APP_ALLOWED_USERS)
    if (localStorage.getItem("CurUser")==process.env.REACT_APP_ALLOWED_USERS)
    
  {return ('true'
    
  );}
  else{
      return ('false'

      );
  }
}


export default Authenticate;
