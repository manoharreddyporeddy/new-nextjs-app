import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      <div className={styles.social}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
