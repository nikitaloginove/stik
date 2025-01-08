<template>
  <section class="description">
    <div class="description__title-section">
      <h3 class="description__main-title">ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ</h3>
      <p class="description__price">8900 RUB</p>
      <img src="../assets/images/save.svg" alt="сохранить" class="description__save-title-icon">
    </div>
    <div class="description__sizes">
      <h4 class="description__sizes-title">Размеры</h4>
        <button type="button" class="description__size-button description__size-button--super-small">XS</button>
        <span class="description__comment-xs">мало</span>
        <button type="button" class="description__size-button description__size-button--small">S</button>
        <button type="button" class="description__size-button description__size-button--medium">M</button>
        <span class="description__comment-m">подписка</span>
    </div>
    <div class="description__color-section">
      <h4 class="description__color-title">Цвет: {{ buttonText }}</h4>
      <div class="description__color-buttons">
        <button
          type="button"
          class="description__color-button description__color-button--white"
          @click="changeColor('белый')"
        ></button>
        <button
          type="button"
          class="description__color-button description__color-button--black"
          @click="changeColor('черный')"
        ></button>
        <button
          type="button"
          class="description__color-button description__color-button--sand"
          @click="changeColor('бежевый')"
        ></button>
      </div>
    </div>
    <div class="description__add-to-basket">
      <button class="description__add-button">ДОБАВИТЬ В КОРЗИНУ</button>
      <button class="description__save-button"><img src="../assets/images/save.svg" alt="сохранить"></button>
    </div>
    <div class="description__characteristics">
      <span class="description__info">ОПИСАНИЕ <span><img src="../assets/images/plus.svg" alt="аккордеон" class="description__plus"></span></span>
      <span class="description__care">СОСТАВ И УХОД <span><img src="../assets/images/plus.svg" alt="аккордеон" class="description__plus"></span></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DescriptionComponent',
  data() {
    return {
      buttonText: 'белый',
    };
  },
  methods: {
    changeColor(color) {
      this.buttonText = color;
    }
  }
};
</script>

<style lang="scss" scoped>

.description {
  padding-inline-start: 61px;
}

.description__main-title {
  font-size: 12px;
}

.description__price {
  font-size: 12px;
}

.description__title-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.description__save-title-icon {
  display: none;
}

.description__sizes {
  padding-top: 31px;
  width: 223px;
  display: grid;
  gap: 0 14px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-size: 10px;
}

.description__sizes-title {
  grid-column-start: 1;
}

.description__size-button--super-small {
  grid-column-start: 1;
  grid-row-start: 2;
}

.description__size-button--small {
  grid-column-start: 2;
  grid-row-start: 2;
}

.description__comment-xs {
  grid-column-start: 1;
  grid-row-start: 3;
  justify-self: center;
  padding-top: 3px;
  color: #BDBDBD;
}

.description__comment-m {
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: center;
  padding-top: 3px;
  color: #BDBDBD;
}

.description__size-button {
  min-width: 65px;
  padding: 9px 24px;
  background-color: inherit;
  font-size: 10px;
  border: 1px solid black;
}

.description__size-button--medium {
  grid-column-start: 3;
  grid-row-start: 2;
  color: #BDBDBD;
  border: 1px solid #BDBDBD;
}

.description__size-button:hover {
  cursor: pointer;
}

.description__size-button:active {
  color: #BDBDBD;
  border: 1px solid #BDBDBD;
}

.description__color-section {
  font-size: 10px;
  padding-top: 36px;
}

.description__color-buttons {
  padding-top: 6px;
  display: flex;
  gap: 16px;
  border: none;
}

.description__color-button {
  width: 28px;
  height: 28px;
  background-color: inherit;
  border: none;
  padding-bottom: 3px;
  position: relative;
}

.description__color-button--white {
  border: 1px solid #BDBDBD;
}

.description__color-button--black {
  background-color: #000000;
}

.description__color-button--sand {
  background-color: #F9F1DC;
}

.description__color-button:hover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  border-bottom: 1px solid #4F4F4F;
}

.description__color-button:hover {
  cursor: pointer;
  padding-bottom: 0;
}

.description__add-to-basket {
  display: flex;
  gap: 10px;
  padding-top: 36px;
  padding-inline-end: 219px;
}

.description__add-button {
  background-color: #000000;
  color: #FFFFFF;
  text-align: center;
  font-size: 11px;
  border: none;
  padding: 15px 24.5px;
  width: 306px;
  height: 44px;
  cursor: pointer;
}

.description__save-button {
  width: 44px;
  height: 44px;
  padding: 10px;
  background-color: inherit;
  cursor: pointer;
  border: 1px solid #000000;
}

.description__characteristics {
  width: 100%;
  padding-top: 40px;
  padding-inline-end: 219px;
  display: flex;
  flex-direction: column;
  font-size: 10px;
}

.description__info {
  display: flex;
  justify-content: space-between;
  height: 41px;
  border-top: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  padding: 14px 0 0;
  text-align: start;
}

.description__care {
  display: flex;
  justify-content: space-between;
  height: 41px;
  border-bottom: 1px solid #E0E0E0;
  padding: 14px 0 0;
  text-align: start;
}

.description__plus {
  padding-inline-end: 9px;
}

.description__plus:hover {
  cursor: pointer;
}

@media (min-width: 375px) and (max-width: 767px) {
  .description__title-section {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }

  .description__main-title {
    grid-row-start: 1;
  }

  .description__save-title-icon {
    display: block;
    width: 13px;
    height: 18px;
    grid-row-start: 1;
    justify-self: end;
  }

  .description {
    padding: 31px 17px 0;
    max-width: 100%;
    box-sizing: border-box;
  }

  .description__add-to-basket {
    display: none;
  }

  .description__sizes {
    padding-top: 31px;
    padding-bottom: 34px;
  }

  .description__color-section {
    padding-top: 0;
  }

  .description__characteristics {
    padding-top: 32px;
    padding-inline-end: 0;
  }

}

</style>