<template>
  <header>
    <b-row>
      <b-col lg="12" md="12">
        <div class="banner">
          <img src="@/assets/images/banner.png" />
        </div>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  border: 1px solid black;
}

img {
  width: 100%;
  max-height: 400px;
}
</style>
