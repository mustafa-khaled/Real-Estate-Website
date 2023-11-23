import photo from "../../Assets/heroSection.jpg";
import styles from "./HeroSection.module.css";

function HeroSection({ page }) {
  return (
    <div
      className={`${styles["hero-section"]} relative md:h-[80vh] h-[60vh] text-white flex items-center justify-center text-center`}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${photo})` }}></div>
      <div className="relative z-10">
        <h1 className="sm:text-5xl text-3xl uppercase font-bold">{page}</h1>
        <p>
          <span className="text-primary">Home</span> {">"} {page}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
