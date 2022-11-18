import Navbar from '../components/Navbar/Navbar';
import MulaiSewa from '../components/About/MulaiSewa';
import Ourservices from '../components/Services/OurServices';
import Whyus from '../components/WhyUs/Whyus';
import Testimonial from '../components/Testimonial/Testimonial';
import About from '../components/About/About';
import Faq from '../components/FAQ/Faq';
import Footer from '../components/Footer/Footer';


function Home() {
    return (
        <>
            <Navbar />
            <MulaiSewa />

            <main>
                <Ourservices />
                <Whyus />
                <Testimonial />
                <About />
                <Faq />
            </main>
            <Footer />
        </>
    );
}

export default Home;
