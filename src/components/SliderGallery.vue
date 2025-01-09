<template>
  <div class="main">
    <div class="main__gallery">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="main__gallery-image"
        :class="{ 'main__gallery-image--selected': currentSlide === index }"
        @click="goToSlide(index)"
      >
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <div class="main__slider">
      <div class="swiper" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
            <img :src="slide.src" :alt="slide.alt" />
          </div>
        </div>
        <div class="main__dots" v-if="showDots">
          <div
            v-for="(_, index) in slides"
            :key="index"
            class="main__dot"
            :class="{ 'main__dot--active': currentSlide === index }"
            @click="goToSlide(index)"
          />
        </div>

        <div class="swiper-button-prev">
          <img src="../assets/images/prev.svg" alt="предыдущий слайд" />
        </div>
        <div class="swiper-button-next">
          <img src="../assets/images/next.svg" alt="следующий слайд" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import picture from '../assets/images/picture.png'
import picture2 from '../assets/images/picture2.png'
import picture3 from '../assets/images/picture3.png'

const swiperContainer = ref(null)
let swiper = null
const currentSlide = ref(0)

const slides = ref([
  { src: picture, alt: 'Slide - 1' },
  { src: picture2, alt: 'Slide - 2' },
  { src: picture3, alt: 'Slide - 3' },
])

const goToSlide = (index) => {
  currentSlide.value = index
  swiper.slideTo(index)
}

const showDots = computed(() => {
  return window.innerWidth >= 375 && window.innerWidth <= 767
})

onMounted(() => {
  swiper = new Swiper(swiperContainer.value, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    on: {
      slideChange: () => {
        currentSlide.value = swiper.activeIndex
      },
    },
  })
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.main__gallery {
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-self: end;
  margin-inline-end: 30px;
  gap: 4px;
}

.main__gallery-image {
  cursor: pointer;
}

.main__gallery-image img {
  width: 100%;
  height: auto;
  display: block;
}

.main__gallery-image--selected {
  opacity: 0.5;
}

.main__slider {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.swiper {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  display: flex;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 300ms;
}

.swiper-slide {
  flex: 0 0 100%;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: top;
}

.swiper-pagination {
  display: none;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-color: #ffffff66;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-prev {
  left: 4%;
}

.swiper-button-next {
  right: 4%;
}

.main__dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.main__dot {
  width: 7px;
  height: 7px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.4;
}

.main__dot--active {
  opacity: 1;
}

@media (min-width: 375px) and (max-width: 767px) {
  .main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .main__gallery {
    display: none;
  }

  .main__slider {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .swiper-slide img {
    width: 100%;
    display: block;
    object-fit: contain;
    object-position: top;
  }
}
</style>
