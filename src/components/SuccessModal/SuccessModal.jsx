import React from "react";
import './SuccessModal.css';
import BounceLoader from "react-spinners/ClipLoader";

const SuccessModal = ({sellId, loading}) => {

  return (
    <div className="success-container">
      <h3>Thank you for choosing us!</h3>
      {loading ? <BounceLoader loading={loading}  color="#e48201" size={80}/> : <span> Your operation Id is: <p className="idNumber">{sellId}</p></span>}
    </div>
  );
};

export default SuccessModal