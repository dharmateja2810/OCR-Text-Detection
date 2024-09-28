import React, { useState } from 'react';

function Display({ text }) {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // function to highlight matching words
  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi')); // split the text by the input
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
        //highlight the matched works with yellow
      ) : (
        part
      )
    );
  };

  // function to set the search term when button is clicked
  const handleSearch = () => {
    setSearchTerm(inputValue); // set the search term from input
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input
          className="input-box"
          placeholder="Enter keyword"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // update input value
        />
        <button className="search-box" onClick={handleSearch}>Search</button>
      </div>
      {text ? (
        <div
          className="text-box"
        >
          {getHighlightedText(text, searchTerm)}
        </div>
      ) : (
        <p>No text detected.</p>
      )}
    </div>
  );
}

export default Display;
