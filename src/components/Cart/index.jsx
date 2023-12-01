import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Porduct";

const Cart = () => {
    return (
        <section className="cart">

            <CartHeader/>
            <Product/>
            <CartFooter/>

            

        </section>
    );
}
 
export default Cart;