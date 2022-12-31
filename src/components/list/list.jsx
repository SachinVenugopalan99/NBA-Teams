 import React, {memo} from 'react';
 import PropTypes from 'prop-types';
 import sort from '../../assets/sort.png';
 import './styles.scss';
 
 const List = (props) => {
   const { tableHeads, tableData, onRowClick, handleSort, selectedTeam } = props;
 
   const handleRowClick = (evt, row) => {
    evt.preventDefault();
     onRowClick(row);
   };
 
   const renderList = (row, index) => {
     const key = row.id;
 
     return (
       <div key={key} className={`row-wrapper ${selectedTeam?.id === row?.id && 'selectedRow'}`}
       onClick={(evt) => handleRowClick(evt, row)}
       >
         {tableHeads.map((head) => 
           <div
             key={head.label}
             style={{ minWidth: head?.width, maxWidth: head?.width }}
           >
             <div key={head.label} className="data-field">{row[head?.value]}</div>
             {!row[head?.value] && head?.value && (
               <span>--</span>
             )}
           </div>)}
       </div>
     );
   };
 
   return (
     <div
       style={{ height: 'calc(100% - 65px)' }}
     >
       <div className="tableHeader">
         {tableHeads.map((head) => (
           <div
             key={head.label}
             className={`header-col-wrapper ${head?.isSort && 'col-wrpper'}`}
             style={{ minWidth: head?.width, maxWidth: head?.width }}
             onClick={() => head?.isSort && handleSort()}
             role="presentation"
             id={head?.id}
           >
               <div className="data-field">
                 {head?.label}
               </div>
             {head?.isSort && (
               <div className="sortIcon">
                 <img
                   alt=""
                   src={sort}
                   height='9px'
                   width='14px'
                 />
               </div>)}
           </div>))}
       </div>
       <div className="">
         {tableData.length && tableData.map((data, index) => renderList(data, index))}
       </div>
     </div>
   );
 };
 
 List.propTypes = {
   tableHeads: PropTypes.arrayOf(PropTypes.shape()),
   tableData: PropTypes.arrayOf(PropTypes.shape()),
   onRowClick: PropTypes.func,
   redirectUrl: PropTypes.func,
   handleSort: PropTypes.func,
 };
 
 List.defaultProps = {
   tableHeads: [],
   tableData: [],
   onRowClick: () => null,
   redirectUrl: () => null,
   handleSort: () => null,
 };
 
 export default memo(List);