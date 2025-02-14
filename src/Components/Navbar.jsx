import { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const Navbar= () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      toast.error("Please enter a search query");
    } else {
      toast.success(`Searching for: ${searchQuery}`);
    }
  };

  const handleCartClick = () => {
    toast.success("Item added to cart!");
  };

  return (
    <>
      <Toaster />
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">DEMO</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shop
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Icons */}
              <a href="#account" className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </a>
              <a href="#wishlist" className="text-gray-600 hover:text-gray-900">
                <Heart className="h-6 w-6" />
              </a>
              <button
                className="text-gray-600 hover:text-gray-900 relative"
                onClick={handleCartClick}
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;