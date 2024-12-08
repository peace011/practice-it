import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-blue-500 w-full text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Welcome to Recipe Hub</h1>
      </header>

      <main className="flex flex-col items-center mt-8 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Search for Recipes</h2>
          <p className="text-gray-600 mb-4">
            Enter ingredients to find the perfect recipes for your needs.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Search Recipes
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Explore Popular Dishes</h2>
          <p className="text-gray-600 mb-4">
            Check out trending recipes that everyone loves!
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Explore
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white w-full py-4 mt-auto text-center">
        <p>© 2024 Recipe Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
