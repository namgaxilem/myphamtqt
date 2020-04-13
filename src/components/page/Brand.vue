<template>
  <div>
    <div class="brand" v-if="!$route.params.id">
      <h1>Thương hiệu</h1>
      <table class="mt-5">
        <tr>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'kami' } })"
              src="@/assets/images/brand/kami.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'aroma' } })"
              src="@/assets/images/brand/aroma.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'amulet' } })"
              src="@/assets/images/brand/amulet.jpg"
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'lush' } })"
              src="@/assets/images/brand/lush.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'keratin' } })"
              src="@/assets/images/brand/keratin.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'nano' } })"
              src="@/assets/images/brand/nano.jpg"
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'complex' } })"
              src="@/assets/images/brand/complex.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'chiko' } })"
              src="@/assets/images/brand/chiko.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'lusstaly' } })"
              src="@/assets/images/brand/lusstaly.jpg"
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'lana' } })"
              src="@/assets/images/brand/lana.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'wolape' } })"
              src="@/assets/images/brand/wolape.jpg"
            />
          </td>
          <td>
            <img
              @click="$router.push({ name: 'brand', params: { id: 'karvannall' } })"
              src="@/assets/images/brand/karvannall.jpg"
            />
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h1>{{ $route.params.id }}</h1>
      <ProductGroup :products="products" />
      <b-pagination
        class="mt-5"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import ProductGroup from "../ProductGroup.vue";

export default {
  name: "Brand",
  components: {
    ProductGroup
  },
  data() {
    return {
      products: [
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        },
        {
          img: "@/assets/images/thuoc-nhuom-toc-han-quoc.png",
          title: "Thuốc nhuộm tóc Hàn Quốc",
          price: 200000
        }
      ],
      currentPage: 1,
      rows: 15,
      perPage: 5
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss"  >
.brand {
  table {
    width: 100%;

    td {
      max-height: 50px;
      max-width: 50px;
    }
  }

  img {
    width: 80%;
    border: 1px solid #f3f3f3;

    &:hover {
      border-color: #668ad6;
      cursor: pointer;
    }
  }
}

/* Pagination */
.page-link {
  color: #28a745 !important;
}

.page-item.active .page-link {
  color: #fff !important;
  background-color: #28a745 !important;
  border-color: #28a745 !important;
}
</style>
