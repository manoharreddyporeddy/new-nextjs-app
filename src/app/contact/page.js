import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
        <p>You can contact us at contact@mywebsite.com.</p>
      </main>
      <Footer />
    </div>
  );
}
