import React from 'react';
import './styles.scss';

const SearchBox = (props) => {
  const {placeHolder, onChange, value} = props;
  return (
    <div className='search-box'>
        <img 
        src='assets\searchIcon.svg'
        width='16px'
        height='16px'
        />
        <input
        className='search-input'
        placeholder={placeHolder}
        onChange={onChange} 
        type='text'
        value={value}
        />
    </div>
  )
}
export default SearchBox

