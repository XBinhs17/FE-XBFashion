import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("footer__top")}>
        <div className={cx("footer__top-title")}>
          <h4>ĐĂNG KÝ NHẬN EMAIL</h4>
          <p>Đăng ký để nhận thông tin sản phẩm mới nhất</p>
        </div>
        <div className={cx("footer__top-form")}>
          <form>
            <input type="email" placeholder="Địa chỉ email của bạn" />
            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>

      <div className={cx("footer__content")}>
        <div className={cx("footer__content-info")}>
          <div className={cx("content__info-logo")}><Link>.XBFashion</Link></div>
          <div className={cx("content__info-address")}>
            <p>
              {" "}
              <FontAwesomeIcon icon={faMapLocationDot} /> Bình Hưng Hòa B, Bình
              Tân, TP.HCM
            </p>
          </div>
          <div className={cx("content__info-phone")}>
            <FontAwesomeIcon icon={faPhone} /> Phone: 0909999889
          </div>
          <div className={cx("content__info-bct")}>
            <img src={images.bct} alt="Bộ công thương" />
          </div>
        </div>

        <div className={cx("footer__content-news")}>
          <div className={cx("content__title")}>Tin tức</div>
          <nav className={cx("content__link")}>
            <ul>
              <li>
                <Link to="#">Sản phẩm mới</Link>
              </li>
              <li>
                <Link to="#">Sản phẩm khuyến mãi</Link>
              </li>
              <li>
                <Link to="#">Bộ sưu tập</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={cx("footer__content-support")}>
          <div className={cx("content__title")}>Hỗ trợ khách hàng</div>
          <nav className={cx("content__link")}>
            <ul>
              <li>
                <Link to="#">Chính sách mua sắm</Link>
              </li>
              <li>
                <Link to="#">Hướng dẫn mua hàng</Link>
              </li>
              <li>
                <Link to="#">Phương thức thanh toán</Link>
              </li>
              <li>
                <Link to="#">Phương thức giao hàng</Link>
              </li>
              <li>
                <Link to="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="#">Bảo mật thông tin</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={cx("footer__content-connect")}>
          <div className={cx("content__title")}>Kết nối với chúng tôi</div>
          <div className={cx("content__social")}>
            <Link to="#">
              <img src={icons.facebook} />
            </Link>
            <Link to="#">
              <img src={icons.tiktok} />
            </Link>
            <Link to="#">
              <img src={icons.instagram} />
            </Link>
            <Link to="#">
              <img src={icons.youtube} />
            </Link>
          </div>
        </div>
      </div>

      <div className={cx("footer__bottom")}>
        <p className="copyright">© 2025 XBFashion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
