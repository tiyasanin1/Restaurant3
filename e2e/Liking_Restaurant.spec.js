const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({I}) => {
    I.see('Favorite Restaurant', '.main__title');
  
    I.amOnPage('/');
    I.seeElement('.restaurant a');
    
    const firstRestaurant = locate('.restaurant a').first();
    I.click(firstRestaurant)
    const firstRestaurantTitle = await I.grabTextFrom('.restaurant__info__name');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant');
    const likedRestaurant = await I.grabTextFrom('.restaurant_name');
    
    assert.strictEqual(firstRestaurantTitle, likedRestaurant);

});
Scenario('empty liked restaurant', ({ I }) => {
  I.see('no restaurant favorite', '.empty_text');
});
Scenario('unliked one restaurant', async({ I }) => {
  I.see('Favorite Restaurant', '.main__title');
  
    I.amOnPage('/');
    I.seeElement('.restaurant a');
    
    const firstRestaurant = locate('.restaurant a').first();
    I.click(firstRestaurant)
    const firstRestaurantTitle = await I.grabTextFrom('.restaurant__info__name');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant');
    const likedRestaurant = await I.grabTextFrom('.restaurant_name');
    
    assert.strictEqual(firstRestaurantTitle, likedRestaurant);


  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  I.click('.restaurant a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('no restaurant favorite', '.empty_text')
});