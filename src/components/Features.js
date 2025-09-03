import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <h3>Feature 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.feature}>
        <h3>Feature 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.feature}>
        <h3>Feature 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Features;
