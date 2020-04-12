<template>
  <footer class="mt-5">
    <b-container>
      <b-row>
        <b-col lg="4" md="12">
          <h4>Chính sách</h4>
          <ul>
            <li>Chất lượng làm nên giá trị, giá trị làm nên thương hiệu, thương hiêu làm nên uy tín, uy tín làm nên niềm tin.</li>
            <li>Tận tình chu đáo phục vụ</li>
            <li>Lấy sự hài long của khách hang đặt lên hang đầu</li>
          </ul>
        </b-col>
        <b-col lg="4" md="12">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <span class="text-bold">Địa chỉ:</span> 331 Vườn Lài, phường An Phú Đông, quận 12, Thành phố Hồ Chí Minh
            </li>
            <li>
              <span class="text-bold">Số điện thoại / Zalo:</span> 0332 76 8494
            </li>
            <li>
              <span class="text-bold">Email:</span> namgaxilem@gmail.com
            </li>
          </ul>
        </b-col>
        <b-col lg="4" md="12">
          <h4>Chính sách</h4>
          <ul class="text-center">
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
}

h4 {
  text-align: center;
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

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
