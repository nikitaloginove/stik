<template>
  <main class="main">
    <div class="main__gallery">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.image"
        :alt="slide.alt"
        @click="selectSlide(index)"
        :class="{ 'main__gallery-image--selected': currentIndex === index }"
        class="main__gallery-image"
        style="cursor: pointer"
      />
    </div>
    <div class="main__slider-container">
      <div class="main__slider">
        <div
          class="main__slides"
          :style="{ transform: `translateX(-${currentIndex * containerWidth}px)` }"
        >
          <div v-for="(slide, index) in slides" :key="index" class="main__slide">
            <img :src="slide.image" :alt="slide.alt" class="main__slide-image"/>
          </div>
        </div>
        <div class="main__controls">
          <button @click="prevSlide" :disabled="currentIndex === 0" class="main__control-prev">
            <img src="../assets/images/prev.svg" alt="предыдущая картинка" class="main__control-prev-image">
          </button>
          <button
            @click="nextSlide"
            :disabled="currentIndex === slides.length - 1"
            class="main__control-next"
          >
            <img src="../assets/images/next.svg" alt="следуюая картинка" class="main__control-next-image">
          </button>
        </div>
      </div>
      <div class="main__dots">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="main__dot"
          @click="goToSlide(index)"
          :class="{ 'main__dot--active': currentIndex === index }"
        ></span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SliderGalleryComponent',
  props: {
    slides: {
        type: Array,
        required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      containerWidth: 0
    };
  },
  mounted() {
      this.containerWidth = document.querySelector('.main__slide').offsetWidth;
  },
  methods: {
    selectSlide(index) {
      this.currentIndex = index;
    },
    prevSlide() {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    },
    nextSlide() {
        this.currentIndex = Math.min(this.slides.length - 1, this.currentIndex + 1)
    },
    goToSlide(index) {
      this.currentIndex = index;
    }
  }
};
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

.main__slider {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.main__slides {
  display: flex;
  transition: transform 0.3s ease;
}

.main__slide {
  flex: 0 0 auto;
  width: 100%; 
}

.main__gallery-image--selected {
    opacity: 0.5;
}

.main__slide img {
  width: 100%;
  height: auto;
  display: block;
}

.main__controls {
  position: absolute;
  top: 50%;
  left: 4%;
  right: 4%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.main__control-prev {
  width: 32px;
  height: 32px;
  background-color: #FFFFFF66;
  border: none;
  cursor: pointer;
  border-radius: 50%;
}

.main__control-next {
  width: 32px;
  height: 32px;
  background-color: #FFFFFF66;
  border: none;
  cursor: pointer;
  border-radius: 50%;
}

.main__control-prev:active {
  opacity: 40%;
}

.main__control-next:active {
  opacity: 40%;
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

  .main__slider-container {
    position: relative; 
    width: 100%;
    overflow-x: hidden;
  } 

  .main__slide img {
    width: 100%;
    display: block;
    object-fit: contain;
    object-position: top;
  }

  .main__dots {
    position: absolute; 
    bottom: 12px; 
    left: 50%; 
    transform: translateX(-50%); 
    display: flex; 
    gap: 6px; 
  }

  .main__dot {
    width: 7px; 
    height: 7px; 
    background-color: #FFFFFF; 
    border-radius: 50%; 
    cursor: pointer; 
    opacity: 0.4;
  }

  .main__dot--active {
    opacity: 1;  
  }
}
</style>