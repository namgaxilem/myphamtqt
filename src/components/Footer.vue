<template>
  <footer>
    <b-container>
      <b-row>
        <b-col lg="4" md="12">
          <img src="@/assets/images/logo-brand.png" />
          <p>Chất lượng làm nên giá trị, giá trị làm nên thương hiệu, thương hiêu làm nên uy tín, uy tín làm nên niềm tin.</p>
          <p>Tận tình chu đáo phục vụ</p>
          <p>Lấy sự hài long của khách hang đặt lên hang đầu</p>
        </b-col>
        <b-col lg="4" md="12">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <span class="text-bold">Địa chỉ:</span> 113 An Phú Đông phường 12 quận 12
            </li>
            <li>
              <span class="text-bold">Số điện thoại:</span> 0123456789
            </li>
            <li>
              <span class="text-bold">Email:</span> namgaxilem@gmail.com
            </li>
          </ul>
        </b-col>
        <b-col lg="4" md="12">
          <h4>Chính sách</h4>
          <ul>
            <li>Chính sách Bảo hành</li>
            <li>Chính sách sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background-color: #f8f8f8;
  text-align: left;
  padding: 1em;

  img {
    width: 100%;
    max-width: 100px;
  }
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  li {
    flex-grow: 1;
    margin: 0.5em 0;
  }
}

.text-bold {
  font-weight: bold;
}
</style>
