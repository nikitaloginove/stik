<template>
  <div>
    <HeaderComponent />
    <ProductDisplay :slides="product.slides" :productData="product" />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import ProductDisplay from './components/ProductDisplay.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ProductDisplay,
  },
  data() {
    return {
      product: {
        slides: [
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
        ],
      },
    }
  },
}
</script>
