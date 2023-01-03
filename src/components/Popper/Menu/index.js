import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

const defaultFunction = () => { }

function Menu({ children, items = [], onChange = defaultFunction }) {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]


    const renderItems = current.data.map((item, index) => {

        const isParent = !!item.children

        return (
            <MenuItem
                key={ index }
                data={ item }
                onClick={ () => {
                    if (isParent) {
                        setHistory(pre => [...pre, item.children])
                    } else {
                        onChange(item)
                    }
                } }
            />
        )
    })

    return (
        <Tippy
            offset={ [20, 10] }
            interactive
            delay={ [0, 700] }
            placement='bottom-end'
            render={ attrs => (
                <div className={ cx('menu-list') } tabIndex="-1" { ...attrs }>
                    <PopperWrapper className={ cx('menu-popper') }>

                        { history.length > 1 && <Header
                            title={ "Language" }
                            onBack={ () => {
                                setHistory(pre => pre.slice(0, pre.length - 1))
                            } }
                        /> }

                        { renderItems }
                    </PopperWrapper>
                </div>
            ) }
            onHide={ () => setHistory(pre => pre.slice(0, 1)) }
        >
            { children }
        </Tippy >
    );
}

export default Menu;