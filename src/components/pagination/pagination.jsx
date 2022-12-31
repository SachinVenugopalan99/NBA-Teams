import React, {memo} from 'react';
import './styles.scss';
import nextIcon from '../../assets/nextIcon.png';
import previousIcon from '../../assets/previousIcon.png';
import PropTypes from 'prop-types';

const Pagination = ({
  next,
  currentPage,
  previous,
  totalPages,
  setPage,
}) => {
  return (
    <div className='container'>
      <div className='blueBox'
      onClick={currentPage > 1 ? previous : () => null}
      style={{cursor: currentPage > 1 ? 'pointer' : 'not-allowed'}}
      >
      <img
        src={previousIcon}
        width='16px'
        height='16px'
      />
      </div>
      <div className='blueBox'
      onClick={() =>setPage(currentPage - 1)}
      >
       {currentPage}
      </div>
      <div className='blueBox'
      onClick={() => setPage(totalPages - 1)}
      >
       {totalPages}
      </div>
      <div className='blueBox'
        onClick={currentPage < totalPages ? next : () => null}
        style={{cursor: currentPage < totalPages ? 'pointer' : 'not-allowed'}}
      >
      <img
        src={nextIcon}
        width='16px'
        height='16px'
      />
      </div>
      </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  setPage: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 0,
  totalPages: 0,
  next: () => null,
  previous: () => null,
  setPage: () => null,
};

export default memo(Pagination);