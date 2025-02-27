import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>

      <div className={cx("footer__top")}>
        <div className={cx("footer__top-title")}>
            <h4>ĐĂNG KÝ NHẬN EMAIL</h4>
            <p>Đăng ký để nhận thông tin sách mới nhất</p>
        </div>
        <div className={cx('footer__top-form')}>
            <form>
                <input type="email" placeholder="Địa chỉ email của bạn" />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
      </div>

      <div className={cx("footer__content")}>
        
      </div>

      <div className={cx("footer__bottom")}>

      </div>
    </footer>
  );
}

export default Footer;
