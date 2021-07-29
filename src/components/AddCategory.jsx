import { useState } from 'react';
// import PropTypes from 'prop-types';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Goku"
        type="text"
        value={inputValue}
      />
    </form>
  );
};

// AddCategory.propTypes = {};

export default AddCategory;
