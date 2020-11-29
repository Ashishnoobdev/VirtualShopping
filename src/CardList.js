import React from 'react';
import Card from './Card';

const CardList = ({ cardContentStructure }) => {

    return (
        <div>
            {
            cardContentStructure.map((item, i) => {
                return (
                    <Card 
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                    />
                )
            })
            }
        </div>
    );
};

export default CardList;
