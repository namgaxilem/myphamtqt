<template>
  <div>
    <div class="card">
      <h5 class="card-header">Thương hiệu</h5>
      <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <ul class="brand-menu">
          <li>KAMI</li>
          <li>AROMI</li>
          <li>AMULET</li>
          <li>LUSY</li>
          <li>KERATIN</li>
          <li>NANO</li>
          <li>COMPLEX</li>
          <li>CHIKO</li>
          <li>LUSSTALY</li>
          <li>LANBA</li>
          <li>WOLAPE</li>
          <li>KARVANNALL</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandMenu"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border-radius: 10px;

  .card-header {
    background-color: green;
    color: #fff;
    font-weight: bold;
  }
}

.brand-menu {
  list-style: none;
  padding: 0;

  li {
    margin-top: 0.6em;
    cursor: pointer;

    &:hover {
      text-decoration: underline;;
    }
  }
}
</style>
