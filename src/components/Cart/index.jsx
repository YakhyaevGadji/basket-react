import { useEffect, useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Porduct";

const Cart = () => {
    const [cart, setCart] = useState(null);
    const [total, setTotal] = useState(null);
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/products').then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setCart(data);
        }).catch((err) => {
            console.log(err);
        });
    }, [fetchData]);

    useEffect(() => {
        if(cart) {
            setTotal({
                price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
                count: cart.reduce((prev, curr) => prev + curr.count, 0)
            });
        }
    }, [cart]);

    const productDelete = (id) => {
        fetch('http://localhost:8000/products/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if(res.ok) {
                setFetchData(value => !value);
            }
        }); 
    };

    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                    }
                }else {
                    return product;
                }
            });
        });
    };

    const decrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }else {
                    return product;
                }
            });
        });
    };

    const changeValue = (id, value) => {
        setCart((oldCart) => {
            return oldCart.map((cart) => {
                if(cart.id === id) {
                    return {
                        ...cart,
                        count: value,
                        priceTotal: value * cart.price
                    }
                }else {
                    return cart;
                }
            });
        });
    };

   

    return (
        <section className="cart">

            <CartHeader/>
            {cart &&  cart.map((product) => {
                return <Product 
                    product={product} 
                    key={product.id} 
                    productDelete={productDelete} 
                    increase={increase} 
                    decrease={decrease}
                    changeValue={changeValue}
                />
            })}
            {total && <CartFooter total={total}/>}
            

        </section>
    );
}
 
export default Cart;