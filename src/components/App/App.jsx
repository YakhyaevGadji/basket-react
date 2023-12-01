import "./_base.scss";
import "./_reset.scss";
import "./_vars.scss";
import "./_section-cart.scss"
import Title from "../Title/Title";
import Cart from "../Cart";

function App() {
    return (
        <div>
            <section className="section-cart">
                <header className="section-cart__header">
                    <div className="container">
                        <Title/>
                    </div>
                </header>
                <div className="section-cart__body">
                    <div className="container">
                        <Cart/>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default App;
