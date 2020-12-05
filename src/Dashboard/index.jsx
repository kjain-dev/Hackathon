import React from 'react';
 
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

function Dashboard(props) {
  const user = getUser();
 
  return (
    <div>
      Welcome Kajal!<br /><br />
    </div>
  );
}
 
export default Dashboard;