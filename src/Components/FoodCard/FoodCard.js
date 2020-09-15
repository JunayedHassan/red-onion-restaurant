import React from 'react';
import imge from '../FoodMenu/images/lunch/lunch6.png'
import LunchMenus from '../FoodMenu/LunchMenus';
const FoodCard = (props) => {
    const {name, img} = props.fditem;
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt=""/>
        </div>
    );
};

export default FoodCard;