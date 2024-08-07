/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";
import "./App.css";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleResponse = (data) => {
    setResponseData(data);
  };

  return (
    <div>
      <h1 className="heading">Frontend Application</h1>
      <InputForm onResponse={handleResponse} />
      {responseData && (
        <ResponseDisplay
          data={responseData}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  );
};

export default App;
