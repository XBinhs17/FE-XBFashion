import classNames from "classnames/bind";

import styles from "./VoucherCard.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function VoucherCard() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left__card")}>
        <h3>50%</h3>
      </div>
      <div className={cx("right__card")}>
        <div className={cx("voucher__title")}>VOUCHER50</div>
        <div className={cx('voucher__des')}>
            <p>Giảm giá 50% cho đơn tối thiểu 500k</p>
        </div>
        <div className={cx('voucher__code')}>
            <p>Mã: <span>voucher50</span></p>
        </div>

        <Button primary>Lưu voucher</Button>

      </div>
      <div className={cx('circle1')}></div>
      <div className={cx('circle2')}></div>
    </div>
  );
}

export default VoucherCard;
