import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/component/Button";
import { Link, NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("header__top")}>
        <div className={cx("header__top-logo")}><Link to="/">.XBFashion</Link></div>

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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? cx("active") : "")}
                end
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sanpham"
                className={({ isActive }) => (isActive ? cx("active") : "")}
                end
              >
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tuixach"
                className={({ isActive }) => (isActive ? cx("active") : "")}
                end
              >
                Túi xách
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phukien"
                className={({ isActive }) => (isActive ? cx("active") : "")}
                end
              >
                Phụ kiện
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
