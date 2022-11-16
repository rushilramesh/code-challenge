import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {ArrowBack, CheckCircle} from "@material-ui/icons"

function Success() {
  const { state } = useLocation();
  const { address, amount } = state;

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="success-container">
      {loading ? (
        <>
        <div className="loader" hidden={!loading}/>
        <p>Your tokens are being sent...</p>
        </>
      ) : (
        <div className="message">
            <CheckCircle style={{color: "limegreen", fontSize: 100}}/>
          <p>Your Payment was successful!</p>
          <p>
            {amount} ETH was sent to {address}.
          </p>
          <Link className="back-link" to="/"><ArrowBack fontSize="medium" color="inherit"/>Make another Transaction</Link>
        </div>
      )}
    </div>
  );
}

export default Success;
