/* eslint-disable no-empty */
import RestaurantSource from '../../data/restaurantSource';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../components/loader';

const Home = {
  async render() {
    return `
    <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">Desserts Milenial</h1>
            <p class="hero__tagline">Menu berbeda tiap hari, reservasi sebelum kehabisan tempat</p>
        </div>        
    </div>
    <h2>Explore Restaurant</h2>
    <div id="restaurant" class="resto_list">
    <loader-component></loader-component>
    </div>   
      `;
  },

  async afterRender() {
    try {
      const restaurantsContainer = document.querySelector('#restaurant');
      const restaurants = await RestaurantSource.allRestaurant();
      restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
      });
      document.querySelector('loader-component').style.display = 'none';
    } catch (error) {

    }
  },
};

export default Home;
