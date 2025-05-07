import React from 'react';

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">📬 Contact Us</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Have questions, feedback, or want to collaborate? We'd love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered dark:bg-slate-800 dark:border-gray-600"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered dark:bg-slate-800 dark:border-gray-600"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text dark:text-white">Message</span>
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="textarea textarea-bordered dark:bg-slate-800 dark:border-gray-600"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="btn btn-primary px-8">
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Or reach us directly at:{" "}
            <a href="mailto:support@bookhaven.com" className="text-pink-600 hover:underline">
              support@bookhaven.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
