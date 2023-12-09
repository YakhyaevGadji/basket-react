import "./style.scss"
import Count from "../Count";
import ButtonDelete from "../ButtonDelete";
import priceFormatter from "../../utils/priceFormatter";

const Product = ({product, productDelete, increase, decrease, changeValue}) => {
    return (
        <section className="product">
                <div className="product__img">
                    <img src={`./img/products/${product.img}`} alt={product.title}/>
                </div>
                <div className="product__title">{product.title}</div>
                <div className="product__count">
                    <Count 
                        count={product.count} 
                        increase={increase} 
                        decrease={decrease} 
                        productId={product.id}
                        changeValue={changeValue}
                    />
                </div>
                <div className="product__price">{priceFormatter.format(product.priceTotal)} руб.</div>
                <div className="product__controls">
                    <ButtonDelete productDelete={productDelete} productId={product.id}/>
                </div>
        </section>
    );
}
 
export default Product;