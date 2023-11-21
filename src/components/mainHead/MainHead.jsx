import styles from "./MainHead.module.css";

import { MdLight } from "react-icons/md";

function MainHead({ children }) {
  return (
    <h1
      className={`${styles["main-head"]} relative mb-[20px] py-[15px] text-center sm:text-5xl text-3xl uppercase font-bold`}>
      {children}
      <MdLight className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] text-base" />
    </h1>
  );
}

export default MainHead;
