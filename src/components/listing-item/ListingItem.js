import React from 'react'
import './ListingItem.css';

function ListingItem() {
  return (
      <div className="listing-item">
          <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="listing-details">
            <div className='listing-categories'>
              Categories
            </div>
          </div>
      </div>
  )
}

export default ListingItem