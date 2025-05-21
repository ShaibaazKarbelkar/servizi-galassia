import './App.css';
import { PopupProvider } from './components/PopupContext';
import Header from './components/Header';
import Banner from './components/Banner';
import Usp from './components/Usp';
import Products from './components/Products';
import Enquire from './components/Enquire';
import Video from './components/Video';
import Categories from './components/Categories'
import About from './components/About';
import Brand from './components/Brand';
import Price from './components/Price';
import Testimonial from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm';
import Faq from './components/Faq';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <PopupProvider>
        {/* Header Start */}
        <Header />
        {/* Header End */}

        {/* EnquirePOPUP Start */}
        <Enquire/>
        {/* EnquirePOPUP End */}

        {/* Banner Start */}
        <Banner />
        {/* Banner End */}

        {/* USP Start */}
        <Usp />
        {/* USP End */}

        {/* Products Start */}
        <Products />
        {/* Products End */}

        {/* Video Start */}
        <Video />
        {/* Video End */}

        {/* Categories Start */}
        <Categories />
        {/* Categories End */}

        {/* About Start */}
        <About />
        {/* About End */}

        {/* Brand Start */}
        <Brand />
        {/* Brand End */}

        {/* Price Start */}
        <Price />
        {/* Price End */}

        {/* Testimonial Start */}
        <Testimonial />
        {/* Testimonial End */}

        {/* EnquiryForm Start */}
        <EnquiryForm />
        {/* EnquiryForm End */}

        {/* Faq Start */}
        <Faq />
        {/* Faq End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </PopupProvider>
    </>
  );
}

export default App;
