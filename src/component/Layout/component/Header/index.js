import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/component/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header__top")}>
        <div className={cx("header__top-logo")}>.XBBook</div>

        <form className={cx("header__top-search")}>
          <div className={cx("input-container")}>
            <input
              className={cx("input-search")}
              placeholder="Tìm kiếm sách..."
            />
            <button type="submit">
              <FontAwesomeIcon className={cx("icon-search")} icon={faSearch} />
            </button>
          </div>
        </form>

        <div className={cx("header__top-action")}>
          <Button outline>
            {" "}
            <FontAwesomeIcon icon={faCartPlus} /> Giỏ hàng
          </Button>
          <Button outline>
            <FontAwesomeIcon icon={faUser} /> Đăng nhập
          </Button>
        </div>
      </div>
      <div className={cx("header__bottom")}>
        <nav className={cx("header__bottom-nav")}>
          <ul className={cx("bottom__nav-menu")}>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/san-pham">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/tin-tuc">Tin tức</Link>
            </li>
            <li>
              <Link to="/ve-chung-toi">Về chúng tôi</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
