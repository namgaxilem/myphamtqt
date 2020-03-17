<template>
  <div id="app">
    <Header />
    <SearchBar />
    <b-container>
      <b-row>
        <b-col lg="2" md="12">
          <BrandMenu />
        </b-col>
        <b-col lg="8" md="12">
          <div class="banner">
            <h4>CÁC SẢN PHẨM CHUYÊN DỤNG CHO SALON</h4>
            <ProductGroup title="THUỐC UỐN" />
            <ProductGroup title="THUỐC DUỖI" />
            <ProductGroup title="THUỐC NHUỘM" />
            <ProductGroup title="DẦU HẤP, DẦU XẢ" />
            <ProductGroup title="DẦU GỘI" />
            <ProductGroup title="PHỤC HỒI" />
            <ProductGroup title="TINH DẦU" />
            <ProductGroup title="GÔM SÁP" />
            <ProductGroup title="HỖ TRỢ HÓA CHẤT" />
            <ProductGroup title="CÁC SẢN PHẨM KHÁC" />
          </div>
        </b-col>
        <b-col lg="2" md="12">
          <ProductGroupRight title="CÁC SẢN PHẨM MỚI" />
          <ProductGroupRight title="CÁC SẢN PHẨM HOT" />
          <ProductGroupRight title="CÁC SẢN PHẨM BÁN CHẠY" />
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
import ProductGroup from "../components/ProductGroup.vue";
import ProductGroupRight from "../components/ProductGroupRight.vue";

export default {
  name: "App",
  components: {
    Header,
    SearchBar,
    BrandMenu,
    Footer,
    ProductGroup,
    ProductGroupRight
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
