import CONFIG from '../../globals/config';

const createReview = (comment) => `
  <div class="review_conten">
    <div class="review__desc">
    <p class="class_date">${comment.date}</p>
    <h4 class="review_name">${comment.name}</h4>
    </div>
    <p class="review_coment">${comment.review}</p>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
<img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar ${resto.title}" />
<div class="restaurant__info">
  <h1 class="restaurant__info__name">${resto.name}</h1>
  <p>${resto.address}, ${resto.city}</p>
  <h2>Description</h2>
  <p class="resto__description">${resto.description}</p>
</div>
  <h2>Menu</h2>
  <div class="menu">
    <div class="menu__drinks">
    <h3>Drinks</h3>
      <div class="drinks__output">
      ${resto.menus.drinks.map((menu) => `<p>${menu.name}</p>`).join('')}
      </div>
    </div>
    <div class="menu__foods">
    <h3>Foods</h3>
      <div class="foods__output">
      ${resto.menus.foods.map((menu) => `<p>${menu.name}</p>`).join('')}
      </div>
    </div>
    </div>
  </div>
  <h2>Reviewer</h2>
  <div class="review__item">
  ${resto.customerReviews.map((review) => createReview(review)).join('')}
  </div>
`;
const createRestoItemTemplate = (restaurant) => `
<div class="restaurant">
<a href="${`/#/detail/${restaurant.id}`}">
<img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant__image lazyload"/>
<div class="restaurant__content">
    <p class="restaurant_name">${restaurant.name}</p>
    <div class="restaurant__more">
        <p class="restaurant__rating">
        <i class="fa-solid fa-star"></i>${restaurant.rating}</p>
        <p class="restaurant__city">
        <i class="fa-solid fa-location-dot"></i>${restaurant.city}</p>
    </div>
    <p class="restaurant__description">${restaurant.description}</p>

</div>
</a>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
