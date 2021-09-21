import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({active,status,todos}) => {
 
  const style = {
    // backgroundColor: active ? 'all' : 'active',
    // backgroundColor: 'red'
  };


  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info" style={style} onClick={()=>{
                status(todos,active)}
                }>All</button>
      <button type="button"
              className="btn btn-outline-success" style={style} onClick={()=>{status(todos,active)}} >Active</button>
      <button type="button"
              className="btn btn-outline-secondary" style={style}  onClick={()=>{status(todos,active)}}>Done</button>
    </div>
  );
};

export default ItemStatusFilter;
