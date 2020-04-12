<template>
  <div>
    <div class="brand" v-if="!$route.params.id">
      <h1>Thương hiệu</h1>
      <table class="mt-5">
        <tr>
          <td>
            <img src="@/assets/images/brand/kami.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/aroma.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/amulet.jpg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/images/brand/lush.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/keratin.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/nano.jpg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/images/brand/complex.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/chiko.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/lusstaly.jpg" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="@/assets/images/brand/lana.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/wolape.jpg" />
          </td>
          <td>
            <img src="@/assets/images/brand/karvannall.jpg" />
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h1>Thương hiệu</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
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
      border-color: #668AD6;
      cursor: pointer;
    }
  }
}
</style>
