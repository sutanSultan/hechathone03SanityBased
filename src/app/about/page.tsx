import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6 text-center fadeIn">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg text-gray-700 mb-10">
          Welcome to our website! We are passionate about providing the best service and experience for our users. Our team is dedicated to making sure you get the most out of our platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md fadeIn">
            <h2 className="text-2xl font-bold mb-4">MUHAMMAD SULTAN</h2>
            <p className="text-gray-700">CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md fadeIn">
            <h2 className="text-2xl font-bold mb-4">MUHAMMAD SULTAN</h2>
            <p className="text-gray-700">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md fadeIn">
            <h2 className="text-2xl font-bold mb-4">MUHAMMAD SULTAN</h2>
            <p className="text-gray-700">COO</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md fadeIn">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About
