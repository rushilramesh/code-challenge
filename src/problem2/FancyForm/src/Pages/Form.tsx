import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import logo from "../Assets/switcheo-swth-logo.svg";

function Form() {
  const [form, setForm] = useState({
    address: "",
    amount: "",
    otp: "",
  });

  const [error, setError] = useState({
    address: "",
    amount: "",
    otp: "",
  });

  const navigate = useNavigate();

  const web3 = new Web3();

  const handleSumit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    for (let field of Object.values(error)) {
        if (field != "") {  
            alert(field)
            return
        }
    }

    navigate("/success", {
      state: {
        address: form.address,
        amount: form.amount,
      },
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    errorMsg: string
  ) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
    setError({
      ...error,
      [event.target.id]: errorMsg,
    });
  };

  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amt = event.target.value;
    if (amt.length === 0) {
      handleChange(event, "Amount cannot be empty!");
    } else {
      handleChange(event, "");
    }
  };

  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checksum = event.target.value;

    if (checksum.length === 0) {
      handleChange(event, "Address cannot be empty!");
    } else if (!web3.utils.isAddress(checksum)) {
      handleChange(event, "Invalid Address!");
    } else {
      handleChange(event, "");
    }
  };

  const handleOTP = (event: React.ChangeEvent<HTMLInputElement>) => {
    const otp = event.target.value;

    // if input is more than 6 digits, ignore change
    if (otp.length < 6) {
      handleChange(event, "Incomplete OTP");
    } else if (otp.length === 6) {
      handleChange(event, "");
    }
  };

  const styleValid = (error: string) => {
    return error.length === 0 ? "" : "invalid";
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <form onSubmit={handleSumit}>
          <a href="https://www.switcheo.com/" className="logo-container" target="_blank">
            <img src={logo}></img>
            <text>Find out more about Switcheo!</text>
          </a>

          <label> ETH Address</label>
          <input
            type="text"
            placeholder="40 Character Hexadecimal"
            className={styleValid(error.address)}
            id="address"
            required
            onChange={handleAddress}
          />
          <p className="error-msg"> {error.address}</p>

          <label>Amount to send</label>
          <input
            type="number"
            min={0}
            placeholder="0"
            className={styleValid(error.amount)}
            id="amount"
            required
            onChange={handleAmount}
          />
          <p className="error-msg"> {error.amount}</p>

          <label>OTP Authentication</label>
          <input
            type="number"
            id="otp"
            className={styleValid(error.amount)}
            onChange={handleOTP}
            placeholder="6-digit OTP"
            value={form.otp}
            required
            autoComplete="one-time-code"
            onScroll={(event) => {}}
          />
          <p className="error-msg"> {error.otp}</p>

          <button className="submitButton">SEND TOKENS</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
