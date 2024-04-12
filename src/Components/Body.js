import RestaurantCard from "../RestaurantCard";
import restaurantList from "../utils/Mockdata";

const Body = () => {
    return (
        
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      
    );
  };
    export default Body;