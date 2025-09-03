import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.subtitle}>
        This is a standard website home page.
      </p>
      <button className={styles.cta}>Learn More</button>
    </div>
  );
};

export default Hero;
