import * as React from "react";

const MyProfile = ({visible}: {visible: boolean}) => {
  if(!visible) {
    return null;
  }

  return (
    <h3>My Profile</h3>
  );
}

export default MyProfile;
