<template>
  <div>
    <div class="brand-menu-container">
      <div class="brand-menu-bar">
        <div class="brand-menu-bar-container">
          <div @click="openBrandMenu" id="nav-icon-hamburger" :class="{'open': isOpenMenu}">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <ul class="brand-menu" :class="{'open': isOpenMenu}">
        <li @click="$router.push({ name: 'homepage' })">Trang chủ</li>
        <li>Sản phẩm</li>
        <li><span @click="$router.push({ name: 'brand' })">Thương hiệu</span>
          <ul class="brand-menu-sub">
            <li @click="$router.push({ name: 'brand', params: { id: 'kami' } })">KAMI</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'aromi' } })">AROMI</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'amulet' } })">AMULET</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'lusy' } })">LUSY</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'keratine' } })">KERATIN</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'nano' } })">NANO</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'complex' } })">COMPLEX</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'chiko' } })">CHIKO</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'lusstaly' } })">LUSSTALY</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'lanba' } })">LANBA</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'wolape' } })">WOLAPE</li>
            <li @click="$router.push({ name: 'brand', params: { id: 'karvannal' } })">KARVANNALL</li>
          </ul>
        </li>
        <li>Sản phẩm chuyên dùng cho Salon</li>
        <li>Sản phẩm chuyên dùng tại nhà</li>
        <li>Sản phẩm mới</li>
        <li>Các sản phẩm nổi bật</li>
        <li>Top sản phẩm bán chạy</li>
        <li>Các sản phẩm khác</li>
        <li>Ý kiến của khách hàng</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandMenu",
  data() {
    return {
      isOpenMenu: false
    };
  },
  methods: {
    openBrandMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    cc() {
      console.log('cc');
      this.$router.push({ name: 'brand', params: { id: 'aromi' } })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.brand-menu-container {
  color: black;
}

.brand-menu-bar {
  display: none;
  background: #28a745;

  .brand-menu-bar-container {
    display: flex;
    flex-direction: row-reverse;
    padding: 0.2em;
  }
}

.brand-menu {
  padding: 0;
  margin: 0;
  list-style-type: none;
  background: #fff;
  transition: 0.25s ease-in-out;

  li {
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    position: relative;

    &:hover {
      background: #28a745;
      color: #fff;
      cursor: pointer;

      .brand-menu-sub {
        display: block;
      }
    }
  }

  .brand-menu-sub {
    background: #fff;
    color: black;
    padding: 0;
    margin: 0;
    list-style-type: none;
    position: absolute;
    left: 100%;
    top: 0;
    display: none;
    width: 150px;
    z-index: 10;
    transition: 0.5s ease-in-out;
  }

  &.open {
    display: block;
  }
}

/* Icon Hamberger */

#nav-icon-hamburger {
  width: 55px;
  height: 40px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  display: block;
}

#nav-icon-hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #fff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon-hamburger span:nth-child(1) {
  top: 0px;
}

#nav-icon-hamburger span:nth-child(2) {
  top: 18px;
}

#nav-icon-hamburger span:nth-child(3) {
  top: 36px;
}

#nav-icon-hamburger.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon-hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon-hamburger.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

@media screen and (max-width: 991px) {
  .brand-menu {
    display: none;

    li {
      height: auto;
      min-height: 2.5em;
      display: flex;
      flex-direction: column;

      &:hover {
        .brand-menu-sub {
          display: inline-block;
        }
      }
    }

    .brand-menu-sub {
      position: relative;
      left: 0;
      width: 100%;
    }
  }

  .brand-menu-bar {
    display: block;
  }
}
</style>
