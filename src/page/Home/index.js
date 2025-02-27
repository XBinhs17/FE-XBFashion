import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Button from "~/component/Button";

const cx = classNames.bind(styles);



function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <Button primary>Xem chi tiết</Button>
            <Button outline>Outline</Button>
            <Button secondary>Xem chi tiết</Button>
        </div>
     );
}

export default Home;