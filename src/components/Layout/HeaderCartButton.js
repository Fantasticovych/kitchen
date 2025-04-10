import { useContext,useState,useEffect} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isbuttonIsAnimetad,setIsbuttonIsAnimetad] = useState(false);

  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);


  const buttonClasses =`${styles.button} ${isbuttonIsAnimetad ?styles.bump:''}`;

  useEffect(()=>{   
    if(cartContext.items.length === 0){
      return;
    }
    setIsbuttonIsAnimetad(true);
   const timer =  setTimeout(() =>
    {
      setIsbuttonIsAnimetad(false)
    },300)

    return()=>{
      clearTimeout(timer);
    }
  },[cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Basket</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
