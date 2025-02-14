import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import { Star, ShoppingCart, Search, User, Heart } from "lucide-react"

const categories = [
    { id: 1, name: "Phone", image: "https://i.pinimg.com/236x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg" },
    { id: 2, name: "HomePod", image: "https://i.pinimg.com/236x/4f/0a/d4/4f0ad4d8f88cad5d42f2c98fe694c903.jpg" },
    { id: 3, name: "Headphones", image: "https://i.pinimg.com/236x/d4/13/f3/d413f351550c68c4297b3e39032eac83.jpg" },
    { id: 4, name: "Gaming Consoles", image: "https://i.pinimg.com/236x/cf/d6/7c/cfd67cf1c0bb1c311b185c144dd211b6.jpg" },
    { id: 5, name: "iPad", image: "https://i.pinimg.com/474x/5e/09/54/5e09549d22b6ac4c16a0e40ff55bad95.jpg" },
    { id: 6, name: "Watch", image: "https://i.pinimg.com/236x/40/82/55/40825522e9d773460fbf54b408bd40f6.jpg" },
];
const latestProducts = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      price: "$399",
      rating: 5,
      image: "https://i.pinimg.com/236x/7a/4c/54/7a4c542a431c2eed43c9c5b7fab39e0d.jpg",
    },
    {
      id: 2,
      name: "HomePod mini",
      price: "$99",
      rating: 4,
      image: "https://i.pinimg.com/236x/d3/fa/d9/d3fad96e5aec8be29f0ebfe56d887c9b.jpg",
    },
    {
      id: 3,
      name: "iPhone 13 Pro",
      price: "$999",
      rating: 5,
      image: "https://i.pinimg.com/236x/2a/55/04/2a55045e7eacab0c5982fb5d3125ff27.jpg",
    },
    {
      id: 4,
      name: "AirPods Max",
      price: "$549",
      rating: 4,
      image: "https://i.pinimg.com/474x/b9/35/29/b9352962b3ee09098ee327c36c58b5e3.jpg",
    },
    {
      id: 5,
      name: "MacBook Pro M2",
      price: "$1,299",
      rating: 5,
      image: "https://i.pinimg.com/236x/d3/24/e0/d324e00fd65f11c4f6cde0b01748af87.jpg",
    },
    {
      id: 6,
      name: "iPad Air 2025",
      price: "$599",
      rating: 4,
      image: "https://i.pinimg.com/236x/82/95/ef/8295ef0e78804ebf7690094e2a171f52.jpg",
    },
    {
      id: 7,
      name: "Apple TV 4K",
      price: "$179",
      rating: 4,
      image: "https://i.pinimg.com/236x/bb/aa/12/bbaa12563f589b684a082d4b5798cbf3.jpg",
    },
    {
      id: 8,
      name: "Magic Keyboard",
      price: "$99",
      rating: 5,
      image: "https://i.pinimg.com/236x/29/a9/8c/29a98cf1cd048e3e8d8961f2a99da4f6.jpg",
    }
];
const popularProducts = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: "$999",
      rating: 5,
      image: "https://i.pinimg.com/236x/a3/c7/6f/a3c76f7a3b1146d8d09bd120339bae37.jpg",
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      price: "$399",
      rating: 5,
      image: "https://i.pinimg.com/236x/b3/51/45/b35145d626324939e928acb9820e3ca3.jpg",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "$249",
      rating: 4,
      image: "https://i.pinimg.com/474x/8d/6d/f8/8d6df8d9ffe7036181c420711ae7fc5f.jpg",
    },
    {
      id: 4,
      name: "iPhone 13",
      price: "$799",
      rating: 5,
      image: "https://i.pinimg.com/236x/c2/a2/eb/c2a2eb642c76c27c8f08203195caeab6.jpg",
    },
    {
      id: 5,
      name: "iPad Pro",
      price: "$799",
      rating: 5,
      image: "https://i.pinimg.com/236x/2d/bb/f1/2dbbf1bd57481461bba8945c91a3c561.jpg",
    },
    {
      id: 6,
      name: "MacBook Air",
      price: "$999",
      rating: 5,
      image: "https://i.pinimg.com/474x/c7/2b/2a/c72b2a140461e347221eb60f9c330cbf.jpg",
    },
    {
      id: 7,
      name: "AirPods Max",
      price: "$549",
      rating: 4,
      image: "https://i.pinimg.com/236x/f2/98/e2/f298e297426b2e30ebfa56bbf736bf1f.jpg",
    },
    {
      id: 8,
      name: "HomePod mini",
      price: "$99",
      rating: 4,
      image: "https://i.pinimg.com/236x/75/4e/5d/754e5d8f0098439b800f956c6ec52e50.jpg",
    },
  ]
  
  const blogPosts = [
    {
      id: 1,
      title: "Best Apple Watch Accessories",
      image: "https://i.pinimg.com/474x/9e/ad/75/9ead7528668da8b313e2e90fdfe19e88.jpg",
    },
    {
      id: 2,
      title: "iPhone 13 Pro Review",
      image: "https://i.pinimg.com/236x/19/59/06/19590665313f9039447a820fdbc2adae.jpg",
    },
    {
      id: 3,
      title: "AirPods Max vs Competition",
      image: "https://i.pinimg.com/236x/e7/ff/f6/e7fff6b0e6790a07b41c928c71f954f8.jpg",
    },
]

const HomePage = () => {
    const [likedItems, setLikedItems] = useState({});
    const [ratings, setRatings] = useState({});

    const toggleLike = (id) => {
        setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const rateProduct = (id, rating) => {
        setRatings((prev) => ({ ...prev, [id]: rating }));
    };

    return ( 
        <div>
            <section className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Apple Watch Series</h1>
                            <p className="text-lg text-gray-600 mb-8">
                                The most advanced Apple Watch yet with breakthrough health innovations.
                            </p>
                            <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600">Shop Now</button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://i.pinimg.com/236x/10/9c/b9/109cb99b3c822c4e43833eaec1cf12f7.jpg"
                                alt="Apple Watch"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-semibold mb-6">Trending Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="text-center relative bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                                {/* Heart Button */}
                                <button 
                                    onClick={() => toggleLike(category.id)} 
                                    className="absolute top-2 right-2 text-red-500 text-xl"
                                >
                                    {likedItems[category.id] ? <FaHeart /> : <FaRegHeart />}
                                </button>

                                {/* Category Image */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-2">
                                    <img 
                                        src={category.image} 
                                        alt={category.name} 
                                        className="w-full h-24 object-contain mx-auto"
                                    />
                                </div>

                                {/* Category Name */}
                                <span className="text-sm font-medium text-gray-700">{category.name}</span>

                                {/* Star Rating */}
                                <div className="flex justify-center mt-2 space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button 
                                            key={star} 
                                            onClick={() => rateProduct(category.id, star)}
                                            className={`text-lg ${star <= (ratings[category.id] || 0) ? "text-yellow-400" : "text-gray-300"}`}
                                        >
                                            {star <= (ratings[category.id] || 0) ? <FaStar /> : <FaRegStar />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Latest Products</h2>
            <button className="text-red-500 hover:text-red-600">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {latestProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="text-red-500 font-bold">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-7xl font-bold mb-4">Up To 70% Discount</h2>
              <p className="text-gray-300 text-2xl mb-6">Check it Out</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">Shop Now</button>
            </div>
            <div className="relative">
              <img
                src="https://i.pinimg.com/236x/83/39/82/8339823656ee1fb3d5487e9ecd86c971.jpg"
                alt="iPhone 13"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Popular Products</h2>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-900">Previous</button>
              <button className="text-gray-600 hover:text-gray-900">Next</button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="text-red-500 font-bold">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold mb-6">Blog & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-medium">{post.title}</h3>
                  <button className="text-red-500 hover:text-red-600 mt-2">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};
 
export default HomePage;
