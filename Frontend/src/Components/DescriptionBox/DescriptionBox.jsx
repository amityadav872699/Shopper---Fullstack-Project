import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website, or electronic commerce website, is a platform that allows people to buy and sell products and services online. E-commerce websites can be used for a variety of transactions, including business-to-business (B2B), business-to-consumer (B2C), and consumer-to-consumer (C2C) sales. They can also be used for online shopping for clothes, ordering software services, and more.</p>
            <p>
            The best part? You can shop from the comfort of your couch, with just a few clicks on your phone, tablet, or computer.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;
