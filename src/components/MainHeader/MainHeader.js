import styles from "./MainHeader.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import CartModal from "./Modals/CartModal";
const MainHeader = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.h1}>ReactMeals</h1>
        <Button
          height={"3.5rem"}
          onClick={() => {
            setShowModal(true);
          }}
          className={styles.button}
        >
          Your Cart 0
        </Button>
      </div>
      {showModal && <CartModal />}
    </>
  );
};
export default MainHeader;
