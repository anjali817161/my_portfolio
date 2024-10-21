const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-900 to-sky-900 p-4">
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <div className="flex space-x-10 mt-4 p-6">
          <a href="https://github.com/anjali817161" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="h-10 w-10 bg-white rounded-full border-black" />
          </a>
          <a href="https://www.linkedin.com/in/anjali-kumari-824839277/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg" alt="LinkedIn" className="h-10 w-10" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-10 w-10" />
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="text-white">© 2024 @nj@li Ch@udh@ry</span>
      </div>
    </footer>
  );
};

export default Footer;
