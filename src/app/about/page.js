import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <p>We are a company that does things.</p>
      </main>
      <Footer />
    </div>
  );
}
