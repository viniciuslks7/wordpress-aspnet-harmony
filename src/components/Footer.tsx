
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WordPress + ASP.NET</h3>
            <p className="text-gray-400">
              A modern approach to content management with the power of .NET backend processing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  WordPress
                </a>
              </li>
              <li>
                <a href="https://dotnet.microsoft.com/apps/aspnet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  ASP.NET
                </a>
              </li>
              <li>
                <a href="https://developer.wordpress.org/rest-api/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  WordPress REST API
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WordPress + ASP.NET Integration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
