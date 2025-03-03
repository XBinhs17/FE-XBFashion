import classNames from "classnames/bind";

import style from "./ProductCard.module.scss";
import Button from "../Button";

const cx = classNames.bind(style);

function ProductCard() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card__img")}>
        <img src="https://res.cloudinary.com/dypftrmtl/image/upload/v1740837454/sp1_zrtzer.jpg" />
      </div>

      <div className={cx("card__bottom")}>
        <div className={cx("product__name")}>
          Light Green Nuggets Woven Flared Skirt
        </div>
        <div className={cx("product__price")}>
          <div className={cx("product__price-origin")}>1.500.000 đ</div>
          <div className={cx("product__price-discount")}>750.000 đ</div>
          <div className={cx("tag__sale")}>-50%</div>
        </div>
        <Button outline>Xem chi tiết</Button>
      </div>
    </div>
  );
}

export default ProductCard;
