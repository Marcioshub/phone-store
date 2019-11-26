import React, { Fragment } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context/context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart(props) {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    if(cart.length > 0) {
                        return (
                            <Fragment>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={props.history} />
                            </Fragment>
                        )
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
    )
}
