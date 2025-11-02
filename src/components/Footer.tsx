export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#D9BA84]/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img src="/Lowriders Logo.jpg" alt="WLA Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">World Low Rider Association</span>
          </div>
          <p className="text-gray-400 text-center md:text-right">
            © 2025 World Low Rider Association. Celebrating culture, heritage, and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
