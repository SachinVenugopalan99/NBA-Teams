import React, { memo } from 'react';
import searchIcon from '../../assets/searchIcon.png';
import PropTypes from 'prop-types';
import './styles.scss';

const SearchBox = (props) => {
  const {placeHolder, onChange, value} = props;
  return (
    <div className='search-box'>
        <img 
        src={searchIcon}
        width='15px'
        height='15px'
        />
        <input
        className='search-input'
        placeholder={placeHolder}
        onChange={onChange} 
        name='teams'
        type='text'
        value={value}
        id='search-input'
        />
    </div>
  )
};
SearchBox.propTypes = {
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SearchBox.defaultProps = {
  placeHolder: '',
  onChange: () => null,
  value: ''
};
export default memo(SearchBox);

