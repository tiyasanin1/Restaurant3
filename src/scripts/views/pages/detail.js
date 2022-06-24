import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantSource';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detailResto"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const details = await RestaurantSource.detailRestaurant(url.id);
      const detailsContainer = document.querySelector('#detailResto');
      detailsContainer.innerHTML = createRestoDetailTemplate(details);
      console.log(document.querySelector('#likeButtonContainer'));

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: details.id,
          name: details.name,
          description: details.description,
          pictureId: details.pictureId,
          rating: details.rating,
          address: details.address,
        },
      });
    } catch (error) { console.log(error); }
  },
};

export default Detail;
