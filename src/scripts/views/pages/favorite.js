/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h2 class="main__title">Favorite Restaurant</h2>
    <div id="restaurant" class="resto_list"></div>
    
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurant');
      if (restaurants.length > 0) {
        restaurants.forEach((resto) => {
          restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
        });
      } else {
        const emtyElement = document.createElement('h3');
        emtyElement.classList.add("empty_text")
      emtyElement.innerText= "no restaurant favorite";
      restaurantsContainer.appendChild(emtyElement)      
      }
      console.log(restaurants);
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
