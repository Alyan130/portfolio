
export default function ContactForm() {
    return (
      <section id="contact" className="bg-transparent dark:bg-gray-900 pt-4">
        <div className="py-12 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="text-4xl md:text-5xl mb-6 text-white text-center font-bold leading-snug">Connect with<span className="font-semibold font-sans"> Me!</span></h1>
          <p className="mb-8 lg:mb-16 font-light text-center t text-[#ADB7BE] dark:text-gray-400 text-base sm:text-lg lg:text-xl">
          I’d love to hear from you! Whether you have a question about my projects, want to collaborate on a new venture, or simply want to connect, feel free to reach out. I’m always open to new opportunities and would be thrilled to discuss how I can contribute to your next project.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Just saying hi!"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  