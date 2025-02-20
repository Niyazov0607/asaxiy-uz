import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../components/Contex/contex";
import "./Cart.scss";

const Cart = () => {
    const { cart, setCart } = useContext(ThemeContext);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                }
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const increaseCount = (productId) => {
        const updatedCart = cart.map((item) =>
            item.product.id === productId
                ? { ...item, count: item.count + 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decreaseCount = (productId) => {
        const updatedCart = cart
            .map((item) =>
                item.product.id === productId && item.count > 1
                    ? { ...item, count: item.count - 1 }
                    : item
            )
            .filter((item) => item.count > 0);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const deleteProduct = (productId) => {
        const updatedCart = cart.filter(
            (item) => item.product.id !== productId
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="cart-container">
            {cart.length === 0 ? (
                <p className="cart-empty">Savat bo'sh</p>
            ) : (
                cart.map((item) => (
                    <div key={item.product.id} className="cart-item">
                        <div className="cart-img">
                            <img
                                src={item.product.image}
                                alt={item.product.name}
                            />
                        </div>
                        <h3 className="cart-title">{item.product.name}</h3>
                        <p className="cart-star">
                            ⭐ {item.product.rating} Rating
                        </p>
                        <p className="cart-old-price">99 000 so'm</p>
                        <p className="cart-new-price">
                            {item.product.price} so'm
                        </p>
                        <p className="cart-stock">
                            Qolgan: {item.product.stock} dona
                        </p>
                        <div className="cart-controls">
                            <button
                                className="cart-btn-minus"
                                onClick={() => decreaseCount(item.product.id)}
                            >
                                -
                            </button>
                            <span className="cart-count">{item.count}</span>
                            <button
                                className="cart-btn-plus"
                                onClick={() => increaseCount(item.product.id)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="cart-delete"
                            onClick={() => deleteProduct(item.product.id)}
                        >
                            O'chirish
                        </button>
                        <button className="cart-buy">
                            Hoziroq xarid qilish
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
