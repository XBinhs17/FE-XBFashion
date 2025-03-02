import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Button from "~/component/Button";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VoucherCard from "~/component/VoucherCard";
import ProductCard from "~/component/ProductCard";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Trang Chủ - XBFashion | Thời Trang Hiện Đại</title>
        <meta
          name="description"
          content="Khám phá các mẫu thời trang hiện đại tại XBFashion. Cập nhật xu hướng mới nhất với chất lượng hàng đầu và giá cả hợp lý."
        />
        <meta
          name="keywords"
          content="thời trang, quần áo, phụ kiện, giày dép, túi xách, XBFashion"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-website.com/" />
        <meta property="og:title" content="Trang Chủ - XBFashion" />
        <meta
          property="og:description"
          content="Khám phá các mẫu thời trang hiện đại tại XBFashion. Cập nhật xu hướng mới nhất với chất lượng hàng đầu và giá cả hợp lý."
        />
        <meta property="og:url" content="https://your-website.com/" />
        <meta
          property="og:image"
          content="https://your-website.com/path-to-image.jpg"
        />
      </Helmet>

      <main className={cx("main")}>
        <figure className={cx("banner")}>
          <>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dypftrmtl/image/upload/v1740833594/banner4_revkki.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dypftrmtl/image/upload/v1740834110/banner5_bgj7lg.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dypftrmtl/image/upload/v1740833589/banner3_xp1lbr.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dypftrmtl/image/upload/v1740833589/banner2_evxwvd.webp" />
              </SwiperSlide>
            </Swiper>
          </>
          {/* <figcaption>Bộ sưu tập mới - Thời trang công sở hiện đại</figcaption> */}
        </figure>

        <section className={cx("section__voucher")}>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className={cx("voucher-card")}>
                  <VoucherCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className={cx("section__featured-products")}>
          <div className={cx("featured__products-title")}>
            <h2>Sản Phẩm Nổi Bật</h2>
          </div>
          <div className={cx("featured__product-list")}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className={cx("featured__product-button")}>
            <Button primary>Xem thêm</Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
