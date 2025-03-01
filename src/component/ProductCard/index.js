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
        <div className={cx("card__bottom-left")}>
          <div className={cx("product__name")}>Light Green Nuggets Woven Flared Skirt</div>
          <di className={cx("product__price")}>1.500.000 đ</di>
        </div>
        <div className={cx("card__bottom-right")}>
          <Button outline>Chi tiết</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
