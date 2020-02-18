import React from 'react';

const Card = ({movie}) => {
    return (
        <div className='card'>
            <img src={movie.img.src} alt={movie.img.alt} width='200' />
            <div className='card-body'>

            <h2 className='card-title'>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
            </div>
            <ul className='list-group list-group-flush'>

            <p>{`Distributor: ${movie.distributor}`}</p>
            <p>{`Amount: ${movie.amount}`}</p>
            </ul>
        </div>
    );
};

export default Card;