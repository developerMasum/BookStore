import React from 'react';

const Book = ({book}) => {
      const { title, subtitle, price,image } = book ;
    return (
        <div>
           <img src={image} alt="" />
        </div>
    );
};

export default Book;