import React from 'react';
import { testID } from '@app/constants/testID';

const Pagination = ({
  next,
  currentPage,
  previous,
  totalPages,
  limit,
  itemsInPage,
  totalItems = 0,
  hasNextPage = true
}) => {
  const nextDisabled = totalPages === currentPage;
  const previousDisabled = currentPage === 1;
  const currentPageIndex = currentPage - 1;
  return (
    <div className='h-[1rem] my-4 flex flex-row items-center justify-center'>
      <img
        src='assets/icons/select-arrow.svg'
        alt=''
        className={`inline-block h-[10px] w-6 transform rotate-90 mx-1 ${previousDisabled ? 'opacity-50' : 'cursor-pointer'
          }`}
        role='presentation'
        onClick={currentPage > 1 ? previous : () => null}
        id={testID?.pagination?.leftArrow}
      />
      <span className='text-center mx-[10px] body-2'>
        {`Showing ${currentPageIndex * limit + 1} - ${currentPageIndex * limit + itemsInPage
          }`}
        {totalItems > 0 && ` of ${totalItems}`}
      </span>
      <img
        src='assets/icons/select-arrow.svg'
        alt=''
        className={`inline-block h-[10px] w-6 transform -rotate-90 mx-1 ${(nextDisabled || !hasNextPage) ? 'opacity-50' : 'cursor-pointer'
          }`}
        role='presentation'
        onClick={hasNextPage ? next : () => null}
        id={testID?.pagination?.rightArrow}
      />
      </div>
  );
};

export default Pagination;