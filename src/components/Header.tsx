
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b shadow-sm bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              W
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg ml-[-10px]">
              A
            </div>
          </div>
          <span className="text-xl font-bold">WordPress + ASP.NET</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <a href="#features" className="font-medium hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#demo" className="font-medium hover:text-blue-600 transition-colors">
            Demo
          </a>
          <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <Button variant="outline" className="mr-2">
            Documentation
          </Button>
          <Button>Get Started</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
