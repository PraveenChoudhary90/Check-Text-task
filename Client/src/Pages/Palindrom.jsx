import React, { useState } from 'react';

const Palindrome = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleCheckPalindrome = () => {
    // Clean string: remove non-alphanumeric & convert to lowercase
    const cleaned = inputValue.replace(/[^a-zA-Z0-9]/, '').toLowerCase();

    let isPalindrome = true;
    const len = cleaned.length;

    // Check palindrome manually
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (cleaned[i] !== cleaned[len - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    if (cleaned.length === 0) {
      setResult(' Please enter a valid string.');
    } else if (isPalindrome) {
      setResult(` "${inputValue}" is a Palindrome.`);
    } else {
      setResult(` "${inputValue}" is NOT a Palindrome.`);
    }
  };

  return (
    <div>
      <h2> Palindrome Checker Project</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter the text or number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCheckPalindrome}>Check</button>
      <p id="result">{result}</p>
    </div>
  );
};

export default Palindrome;
