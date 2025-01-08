<template>
  <header class="header">
    <div class="header__menu-mobile">
      <img src="../assets/images/lk.svg" alt="личный кабинет" class="header__lk-mobile">
      <img src="../assets/images/find.svg" alt="поиск" class="header__find-mobile">
    </div>
    <img src="../assets/images/basket.svg" alt="корзина" class="header__basket-mobile">
    <img src="../assets/images/logo.svg" alt="логотип" class="header__logo">
    <div class="header__menu">
      <img src="../assets/images/find.svg" alt="поиск" class="header__find">
      <img src="../assets/images/save1.svg" alt="сохранить" class="header__save">
      <img src="../assets/images/lk.svg" alt="личный кабинет" class="header__lk">
      <img src="../assets/images/basket.svg" alt="корзина" class="header__basket">
    </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
};
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  max-height: 86px;
  display: grid;
  padding: 31px 0 31px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

.header__logo { 
  justify-self: center;
  grid-row-start: 1;
  grid-column-start: 2;
}

.header__menu {
  display: flex;
  gap: 18px;
  justify-self: end;
  grid-column-start: 3;
  grid-row-start: 1;
  padding-right: 48px;
  cursor: pointer;
}

.header__menu-mobile {
  display: none;
}

.header__basket-mobile {
  display: none;
}

@media (min-width: 375px) and (max-width: 767px) {
  .header {
    width: 100%;
    max-height: 50px;
    padding: 16px 0 17px;
  }

  .header__logo {
    justify-self: center;
    grid-column-start: 2; 
    grid-row-start: 1;
  }

  .header__save {
    display: none;
  }

  .header__menu {
    display: none;
  }

  .header__menu-mobile {
    display: flex;
    gap: 20px;
    padding-inline-start: 19px;
  }
  
  .header__basket-mobile {
    display: block;
    justify-self: end;
    padding-inline-end: 18px;
  }
}
</style>