/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./ResponseDisplay.css";

const ResponseDisplay = ({ data, selectedOptions, setSelectedOptions }) => {
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((opt) => opt !== value)
        : [...prev, value]
    );
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions((prev) => prev.filter((opt) => opt !== option));
  };

  return (
    <div className="response-container">
      <div className="select-container">
        <select multiple onChange={handleOptionChange}>
          <option value="alphabets">Alphabets</option>
          <option value="numbers">Numbers</option>
          <option value="highest_alphabet">Highest Alphabet</option>
        </select>
      </div>
      <div className="selected-options">
        {selectedOptions.map((option) => (
          <span key={option} className="tag">
            {option}
            <button
              className="remove-button"
              onClick={() => handleRemoveOption(option)}
            >
              ✖
            </button>
          </span>
        ))}
      </div>
      <div className="response-data">
        {selectedOptions.includes("alphabets") && (
          <p>
            {" "}
            <span className="bb">Alphabets:</span> {data.alphabets.join(", ")}
          </p>
        )}
        {selectedOptions.includes("numbers") && (
          <p>
            <span className="bb">Numbers:</span> {data.numbers.join(", ")}
          </p>
        )}
        {selectedOptions.includes("highest_alphabet") && (
          <p>
            <span className="bb">Highest Alphabet:</span>{" "}
            {data.highest_alphabet.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

ResponseDisplay.propTypes = {
  data: PropTypes.shape({
    alphabets: PropTypes.arrayOf(PropTypes.string).isRequired,
    numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    highest_alphabet: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
};

export default ResponseDisplay;
