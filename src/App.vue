<script setup>
import { ref, computed, onMounted } from 'vue';

const slides = ref([
    {
        image: new URL('./assets/images/picture.png', import.meta.url).href,
        alt: 'Slide 1',
    },
    {
        image: new URL('./assets/images/picture2.png', import.meta.url).href,
        alt: 'Slide 2',
    },
    {
        image: new URL('./assets/images/picture3.png', import.meta.url).href,
        alt: 'Slide 3',
    },
]);

const currentIndex = ref(0);
const containerWidth = ref(0);
const selectedColor = ref('white');

const prevSlide = () => {
  if(currentIndex.value > 0){
    currentIndex.value--;
  }
};

const nextSlide = () => {
  if (currentIndex.value < slides.value.length - 1) {
    currentIndex.value++;
  }
};

const selectSlide = (index) => {
  currentIndex.value = index;
};

const changeColor = (color) => {
  selectedColor.value = color;
};

const buttonText = computed(() => {
  switch (selectedColor.value) {
    case 'white':
      return 'белый';
    case 'black':
      return 'черный';
    case 'sand':
      return 'бежевый';
    default:
      return 'выберите цвет'; 
  }
});

const goToSlide = (index) => {
    currentIndex.value = index;
};

onMounted(() => {
  const container = document.querySelector('.slides');
  if (container) {
    containerWidth.value = container.offsetWidth;
  }
})

</script>

<template>
    <header>
        <div class="header-menu-mobile">
          <img src="./assets/images/lk.svg" alt="личный кабинет" class="lk">
          <img src="./assets/images/find.svg" alt="поиск" class="find">
        </div>
        <img src="./assets/images/basket.svg" alt="корзина" class="basket-mobile">
        <img src="./assets/images/logo.svg" alt="логотип" class="logo">
        <div class="header-menu">
            <img src="./assets/images/find.svg" alt="поиск" class="find">
            <img src="./assets/images/save1.svg" alt="сохранить" class="save">
            <img src="./assets/images/lk.svg" alt="личный кабинет" class="lk">
            <img src="./assets/images/basket.svg" alt="корзина" class="basket">
        </div>
    </header>

    <main>
        <div class="galery">
            <img
                v-for="(slide, index) in slides"
                :key="index"
                :src="slide.image"
                :alt="slide.alt"
                @click="selectSlide(index)"
                :class="{ 'selected-image': currentIndex === index }"
                style="cursor: pointer"
            />
        </div>
        <div class="slider-container">
          <div class="slider">
            <div
                class="slides"
                :style="{ transform: `translateX(-${currentIndex * containerWidth}px)` }"
            >
                <div v-for="(slide, index) in slides" :key="index" class="slide">
                    <img :src="slide.image" :alt="slide.alt" class="main-image"/>
                </div>
            </div>
            <div class="controls">
                <button @click="prevSlide" :disabled="currentIndex === 0" class="prev">
                    <img src="./assets/images/prev.svg" alt="предыдущая картинка">
                </button>
                <button
                    @click="nextSlide"
                    :disabled="currentIndex === slides.length - 1"
                    class="next"
                >
                    <img src="./assets/images/next.svg" alt="следуюая картинка">
                </button>
            </div>
          </div>
          <div class="dots">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="dot"
              @click="goToSlide(index)"
              :class="{ 'active': currentIndex === index }"
            ></span>
          </div>
        </div>
        <section class="description">
          <div class="title-section">
            <h3 class="main-title">ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ</h3>
            <p class="price">8900 RUB</p>
            <img src="./assets/images/save.svg" alt="сохранить" class="save-title-icon">
          </div>
          <div class="sizes">
            <h4 class="sizes-title">Размеры</h4>
              <button type="button" class="size-button super-small">XS</button>
              <span class="comment-xs">мало</span>
              <button type="button" class="size-button small">S</button>
              <button type="button" class="size-button medium">M</button>
              <span class="comment-m">подписка</span>
          </div>
          <div class="color-section">
            <h4>Цвет: {{ buttonText }}</h4>
            <div class="color-buttons">
              <button
                type="button"
                class="color-button color-button-white"
                @click="changeColor('white')"
              ></button>
              <button
                type="button"
                class="color-button color-button-black"
                @click="changeColor('black')"
              ></button>
              <button
                type="button"
                class="color-button color-button-sand"
                @click="changeColor('sand')"
              ></button>
            </div>
          </div>
          <div class="add-to-basket">
            <button class="add-button">ДОБАВИТЬ В КОРЗИНУ</button>
            <button class="save-button"><img src="./assets/images/save.svg" alt="сохранить"></button>
          </div>
          <div class="characteristics">
            <span class="info">ОПИСАНИЕ <span><img src="./assets/images/plus.svg" alt="аккордеон" class="plus"></span></span>
            <span class="care">СОСТАВ И УХОД <span><img src="./assets/images/plus.svg" alt="аккордеон" class="plus"></span></span>
          </div>
        </section>
    </main>
</template>

<style scoped>

.slider{
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  flex: 0 0 auto;
  width: 100%; 
  box-sizing: border-box;
}

.selected-image {
    opacity: 0.5;
}

</style>
