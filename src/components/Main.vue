<template>
  <div id="app">
    <Header />
    <SearchBar />
    <b-container>
      <b-row>
        <b-col lg="2">
          <BrandMenu />
        </b-col>
        <b-col lg="8">
          <router-view />
        </b-col>
        <b-col lg="2">
          <!-- <ProductGroupRight title="CÁC SẢN PHẨM MỚI" />
          <ProductGroupRight title="CÁC SẢN PHẨM HOT" />
          <ProductGroupRight title="CÁC SẢN PHẨM BÁN CHẠY" /> -->
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import SearchBar from "../components/SearchBar.vue";
import BrandMenu from "../components/BrandMenu.vue";
// import ProductGroup from "../components/ProductGroup.vue";
// import ProductGroupRight from "../components/ProductGroupRight.vue";

export default {
  name: "App",
  components: {
    Header,
    SearchBar,
    BrandMenu,
    Footer,
    // ProductGroup,
    // ProductGroupRight
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

.trangchu {
  text-align: left;
  line-height: 2.5em;

  h4 {
    text-decoration: underline;
  }

}
</style>
