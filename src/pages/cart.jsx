import "./cart.css";
import { useContext } from 'react';
import DataContext from "../store/dataContext";


function Cart() {
    const cart = useContext(DataContext).cart;

    function getNumProduct() {
        let sum = 0;

        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            sum += prod.quantity
        }

        return sum;
    }

    function getTotal () {

    }
    
    return (
        <div className="cart page">
            <h1>Are you ready to get your products?</h1>
            <h5>You have {getNumProduct()} products in the cart</h5>

        <div className="parent">
            <section className="list">
                List of products here
            </section>
            <section className="side">
                Side Panel

                <h4>Total</h4>
                <h5>{getTotal()}</h5>
            </section>
        </div>
    </div>
    );
}

export default Cart;