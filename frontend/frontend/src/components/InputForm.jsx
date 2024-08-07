/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./InputForm.css";

const InputForm = ({ onResponse }) => {
  const [jsonData, setJsonData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonData);
      const response = await axios.post("/bfhl", parsedData);
      onResponse(response.data);
    } catch (error) {
      console.error("Error submitting JSON:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        className="input-area"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder="Enter JSON data here..."
        required
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

InputForm.propTypes = {
  onResponse: PropTypes.func.isRequired,
};

export default InputForm;
