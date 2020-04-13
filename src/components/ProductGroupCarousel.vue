<template>
  <div>
    <h5 class="text-left text-bold">{{title}}</h5>
    <carousel
     :perPage="4"
     :autoplay="true"
     :autoplayHoverPause="true"
     :autoplayTimeout="2000"
     :loop="true"
    >
      <slide>
        <div>
          <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
          <h6>Thuốc nhuộm tóc Hàn Quốc</h6>
          <p>200.000</p>
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
          <h6>Thuốc nhuộm tóc Hàn Quốc</h6>
          <p>200.000</p>
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
          <h6>Thuốc nhuộm tóc Hàn Quốc</h6>
          <p>200.000</p>
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
          <h6>Thuốc nhuộm tóc Hàn Quốc</h6>
          <p>200.000</p>
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/assets/images/thuoc-nhuom-toc-han-quoc.png" />
          <h6>Thuốc nhuộm tóc Hàn Quốc</h6>
          <p>200.000</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProductGroupCarousel",
  props: ["title", "products"],
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped lang="scss">
h5 {
  font-weight: bold;
}
</style>
