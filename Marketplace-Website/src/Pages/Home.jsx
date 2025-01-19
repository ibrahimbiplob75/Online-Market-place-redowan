import { Link } from 'react-router-dom';
import IntroImage from '../../src/assets/Images/WhatsApp Image 2024-12-16 at 1.06.27 AM (1).jpeg';
import Container from '../Components/UI/Container';
import Services from './Magazine';

const Home = () => {
  return (
    <Container>
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 py-20 gap-12">
        {/* <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="block">Explore</span>
            <span className="text-primary">Digital Magazine</span>
            <span className="block text-secondary">E-Portal</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            Discover and manage your project equipment with ease. Explore our lab inventory or purchase the tools you need for your projects. Experience innovation, all at your fingertips!
          </p>
          
        </div> */}
        <div className="relative">
          <img
            src={IntroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
          />
          
        </div>
      </div>

      {/* Features Section */}
<div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 mt-10 py-16">
  <div className="text-center mb-10">
    <h2 className="text-5xl font-bold text-gray-800 tracking-wider">
      Why Choose <span className="text-primary">Us?</span>
    </h2>
    <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
      Experience the ultimate blend of creativity, storytelling, and style. We’re not just a publication — we’re a movement redefining how you connect with stories that matter.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-20">
    <div className="space-y-6">
      <div className="relative bg-primary rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-md">
        <i className="fas fa-pen-nib text-4xl text-white"></i>
        <div className="absolute -bottom-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary shadow">
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">Captivating Content</h3>
      <p className="text-gray-500 text-lg">
        Immerse yourself in articles crafted to inspire, inform, and ignite your imagination. From in-depth features to the latest trends, we’ve got it all.
      </p>
    </div>
    <div className="space-y-6">
      <div className="relative bg-primary rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-md">
        <i className="fas fa-users text-4xl text-white"></i>
        <div className="absolute -bottom-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary shadow">
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">Global Community</h3>
      <p className="text-gray-500 text-lg">
        Join a worldwide network of readers and contributors who live and breathe culture, fashion, and innovation.
      </p>
    </div>
    <div className="space-y-6">
      <div className="relative bg-primary rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-md">
        <i className="fas fa-lightbulb text-4xl text-white"></i>
        <div className="absolute -bottom-2 bg-white w-8 h-8 rounded-full flex items-center justify-center text-primary shadow">
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">Innovative Ideas</h3>
      <p className="text-gray-500 text-lg">
        Stay ahead of the curve with groundbreaking ideas and exclusive insights that keep you one step ahead.
      </p>
    </div>
  </div>
</div>

{/* Call-to-Action Section */}
<div className="bg-gradient-to-br from-primary to-indigo-600 text-white mt-10 py-16">
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold tracking-wider">
      Join Our <span className="italic underline decoration-wavy">Team</span>
    </h2>
    <p className="text-gray-200 mt-6 text-lg leading-relaxed">
      Ready to write your next chapter? Become part of a dynamic team shaping the future of digital media. Whether you're a storyteller, designer, or strategist, there's a place for you here.
    </p>
    <Link
      to="/"
      className="mt-10 inline-block bg-white text-primary hover:bg-gray-200 font-bold py-4 px-12 rounded-full shadow-md transition-all duration-300"
    >
      Join Us Today
    </Link>
  </div>
</div>

    </Container>
  );
};

export default Home;
