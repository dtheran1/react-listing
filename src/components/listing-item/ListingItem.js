import React from 'react'
import './ListingItem.css';

function ListingItem() {
  return (
    <div className="listing-item">
      <img className='listing-img' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className="listing-details">
        <div className='listing-categories'>
          <span className='listing-category'> Buy</span>
          <span className='listing-category' > Self</span>
        </div>
        <span className='listing-title'> Awesome property available. </span>
        <hr />
        <span className='listing-time'>2 days ago</span>
      </div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
      </p>
    </div>
  )
}

export default ListingItem