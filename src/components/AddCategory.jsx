import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
    console.log(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit', inputValue);

    if (inputValue.trim().length >= 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        placeholder="Search..."
        type="text"
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
