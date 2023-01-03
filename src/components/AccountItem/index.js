import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import Image from '~/components/Image'
function AccountItem() {

    const cx = classNames.bind(styles)
    return (
        <div className={ cx('wrapper') }>
            <Image
                className={ cx('avatar') }
                src=""
                alt="Huy"
            />
            <div className={ cx('info') }>
                <h4 className={ cx('name') }>
                    <span>hoa_2309</span>
                    <FontAwesomeIcon className={ cx('check') } icon={ faCheckCircle } />
                </h4>
                <span className={ cx('username') }>Ngô Ngọc Hòa</span>
            </div>
        </div>
    );
}

export default AccountItem;