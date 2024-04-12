import {CDN_URL} from './utils/constants';

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
      
      <img className="food-img"
      src ={CDN_URL
         +
        cloudinaryImageId
      }/>
     <h2>{name}</h2>
      <p>{cuisines}</p>
      <p>{area}</p>
      <span>
          <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    )
  };
  export default RestaurantCard;