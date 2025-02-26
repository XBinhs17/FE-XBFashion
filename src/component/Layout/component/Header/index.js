import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
              <button type="submit"><FontAwesomeIcon className={cx("icon-search")} icon={faSearch} /></button>
            </div>
        </form>

        <div className={cx("header__top-action")}>

        </div>

      </div>
      <div className={cx("header__bottom")}></div>
    </header>
  );
}

export default Header;
