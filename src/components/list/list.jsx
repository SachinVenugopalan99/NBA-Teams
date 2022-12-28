 /* eslint-disable react/no-multi-comp */
 import React from 'react';
 import PropTypes from 'prop-types';
 import './styles.scss';
 
 const List = (props) => {
   const { tableHeads, tableData, selectorKey, onRowClick,
     emptyMessage, disabledList, handleSort, redirectUrl } = props;
 
   const handleRowClick = (evt, row) => {
     onRowClick(row);
     evt.preventDefault();
   };
 
   const renderList = (row, index) => {
     const isDisabled = disabledList.find((item) => item[selectorKey] === row[selectorKey]);
     const key = row.id || row.name || row.title;
 
     return (
       <div key={key} className={`row-wrapper px-[10px] border-b-1 border-b-[#e0e3e5] ${index > 0 && index % 9 === 0 && 'last-row'} ${isDisabled ? '-disabled' : ''}`} id={row[selectorKey]}>
         {tableHeads.map((head) => 
           <a
             key={head.label}
             className="data-col pl-20 ellipsis"
             style={{ minWidth: head?.width, maxWidth: head?.width }}
             onClick={(evt) => handleRowClick(evt, row)}
             href={redirectUrl(row) || ''}
           >
             <div key={head.label} className="data-field tableRow">{row[head?.value]}</div>
             {!row[head?.value] && head?.value && (
               <span className="empty-item">--</span>
             )}
           </a>)}
       </div>
     );
   };
 
   return (
     <div className="order-list q-gray f-16 rounded-lg"
       style={{ height: 'calc(100% - 65px)' }}
     >
       <div className="header-wrapper px-[10px] bg-table-header tableHeader rounded-t-lg">
         {tableHeads.map((head) => (
           <div
             key={head.label}
             className={`d-flex header-col-wrapper ${head?.isSort && 'pointer'}`}
             style={{ minWidth: head?.width, maxWidth: head?.width }}
             onClick={() => head?.isSort && handleSort(head)}
             role="presentation"
             id={head?.id}
           >
             <div className="header-col pl-20 ellipsis">
               <div className="data-field">
                 {head?.label}
               </div>
             </div>
             {head?.isSort && (
               <div className="d-flex-column ml-15 justify-center">
                 <img
                   alt=""
                   src="assets/icons/sort-arrow.svg"
                   className={'sort-arrow down'}
                   role="presentation"
                 />
               </div>)}
           </div>))}
       </div>
       <div className="table-body-wrapper list v-scroll">
         {tableData.length ? tableData.map((data, index) => renderList(data, index))
           : <div className="no-data-list-wrapper">{emptyMessage}</div>}
       </div>
     </div>
   );
 };
 
 List.propTypes = {
   tableHeads: PropTypes.arrayOf(PropTypes.shape()),
   tableData: PropTypes.arrayOf(PropTypes.shape()),
   selectorKey: PropTypes.string,
   onRowClick: PropTypes.func,
   emptyMessage: PropTypes.string,
   disabledList: PropTypes.arrayOf(PropTypes.shape()),
   redirectUrl: PropTypes.func,
   handleSort: PropTypes.func,
   sort: PropTypes.string,
   order: PropTypes.string
 };
 
 List.defaultProps = {
   tableHeads: [],
   tableData: [],
   selectorKey: 'id',
   onRowClick: () => null,
   emptyMessage: '',
   disabledList: [],
   redirectUrl: () => null,
   handleSort: () => null,
   sort: '',
   order: ''
 };
 
 export default List;