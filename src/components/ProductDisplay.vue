<template>
  <div class="product-display">
    <SliderGalleryComponent :slides="slides" />
    <DescriptionComponent :product="productData" />
  </div>
</template>


<script>
import SliderGalleryComponent from './SliderGallery.vue';
import DescriptionComponent from './Description.vue';

export default {
  name: 'ProductDisplay',
  components: {
    SliderGalleryComponent,
    DescriptionComponent
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
    productData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.product-display {
  display: flex; 
  width: 100%;
}

@media (min-width: 375px) and (max-width: 767px) {
  .product-display {
    display: flex;
    flex-direction: column; 
    width: 100%;
  }
}

</style>