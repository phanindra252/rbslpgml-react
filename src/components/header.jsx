const Header = () => {
  return (
    <section className="bg-neutral-600 p-2 px-4 sm:px-8 md:px-12 lg:px-44">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/*-- Contact Information --> */}
        <div className="mb-2 md:mb-0">
          <p className="text-zinc-100 text-xs sm:text-sm px-2 text-center md:text-left">
            Contact us on 07749199996 or rohanpgml@hotmail.com.
          </p>
        </div>

        {/* <!-- Social Media Icons --> */}
        <div className="flex justify-center md:justify-end space-x-1 ">
          <a href="contact.html" aria-label="Phone">
            <svg
              className="fill-current text-neutral-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6l40.4 49.3c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
            </svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg
              className="fill-current text-neutral-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg
              className="fill-current text-neutral-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              className="fill-current text-neutral-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
            </svg>
          </a>
          <a href="#" aria-label="Email">
            <svg
              className="fill-current text-neutral-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
