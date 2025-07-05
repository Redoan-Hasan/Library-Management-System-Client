import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative h-[calc(100vh-133px)]">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://i.postimg.cc/23RYXkLC/book-Collection-Banner.jpg" 
          alt="Book Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-blue-700">Book</span><span className="text-pink-500">Hub</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
          Discover your next favorite book from our extensive collection
        </p>
        <Link to="/books">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full font-medium">
            Browse Our Book Collection
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;