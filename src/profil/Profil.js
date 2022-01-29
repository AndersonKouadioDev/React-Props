import React from "react";

const Profil = (props) => {
  const { fullName, bio, profession, handleName, children } = props;
  handleName(fullName);
  return (
    <div>
      <div className="profil-haeder">
        <h2>{fullName}</h2>
        <img src={children} alt="photoprofil" width={70} />
      </div>
      <div className="profil-body">
        <b>{profession}</b> <br />
        <p>{bio}</p>
      </div>
    </div>
  );
};
export default Profil;
