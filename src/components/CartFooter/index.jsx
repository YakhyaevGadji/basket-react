import priceFormatter from "../../utils/priceFormatter";
import "./style.scss"

const CartFooter = ({total}) => {
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{total.count} ед</div>
            <div className="cart-footer__price">{priceFormatter.format(total.price)} руб.</div>
        </footer>
    );
}
 
export default CartFooter;