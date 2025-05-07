import React from 'react';

export default function About() {
  return (
    <section className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Book Haven</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Welcome to <span className="text-pink-600 font-semibold">Book Haven</span> — your one-stop destination for books, learning, and inspiration. Whether you're a student, a professional, or a passionate reader, our collection has something for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border rounded-xl hover:shadow-md hover:scale-105 transition duration-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">📚 Curated Collections</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We handpick the best books and resources to help you grow in knowledge, whether it’s tech, self-help, or academic excellence.
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-md hover:scale-105 transition duration-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">🚀 Free Learning Resources</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access a variety of free courses, eBooks, and tools to level up your skills — completely free of cost.
            </p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-md hover:scale-105 transition duration-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">🤝 Community-Driven</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're more than a bookstore — we're a community. Join us to share, learn, and grow with like-minded readers and learners.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-md text-gray-500 dark:text-gray-400">
            Started as a passion project by developers and educators, Book Haven aims to make quality knowledge accessible to all. We're constantly expanding our collection to help you achieve more with less.
          </p>
        </div>
      </div>
    </section>
  );
}
