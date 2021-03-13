import React, { MouseEventHandler, useState } from "react";

import styles from "./Coin.module.css";

export interface CoinProps {
  heads: JSX.Element;
  tails: JSX.Element;
}

export const Coin: React.FC<CoinProps> = ({ heads, tails }) => {
  const [flipping, setFlipping] = useState(false);
  const [headsOrTails, setHeadsOrTails] = useState("");
  const flipCoin: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setFlipping(false);
    setHeadsOrTails("");
    setTimeout(() => {
      setFlipping(true);
      if (Math.random() <= 0.5) {
        setHeadsOrTails("heads");
      } else {
        setHeadsOrTails("tails");
      }
    }, 50);
  };
  return (
    <div
      onClick={flipCoin}
      className={`relative w4 w5-ns h4 h5-ns center pointer ${styles.coin} ${
        flipping ? styles["coin--" + headsOrTails] : ""
      }`}
    >
      <div className={`absolute ${styles.sideA} ${styles.side}`}>{heads}</div>
      <div className={`absolute ${styles.sideB} ${styles.side}`}>{tails}</div>
    </div>
  );
};
