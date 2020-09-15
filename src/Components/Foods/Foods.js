import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import LunchMenus from '../FoodMenu/LunchMenus';
import './Foods.css'

var lunchlist = LunchMenus
console.log(lunchlist)
const Foods = () => {
    return (
        <div>
            <nav>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </nav>
            <div className="foodMenu">
                <div className="card-deck">
                    {
                        LunchMenus.map(fdItem => <div className="card" key={fdItem.id}><FoodCard  fditem={fdItem}  ></FoodCard></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;