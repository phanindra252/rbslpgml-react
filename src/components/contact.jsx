const Contactpage = () => {
  return (
    <section className="mb-0">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11376.143737699917!2d0.05841215471208968!3d51.372187916405544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab147661ce3d%3A0xd9f413837f2d9632!2s4%20Poplar%20Ave%2C%20Orpington%20BR6%208LA%2C%20UK!5e0!3m2!1sen!2sin!4v1727712455813!5m2!1sen!2sin"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    id="exampleCheck96"
                    defaultChecked
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck96"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full rounded bg-primary px-6 py-3 text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-0"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-7/12 lg:px-6">
              <h2 className="mb-6 text-[1.625rem] font-bold">Get in touch</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit sit velit eos atque reiciendis ad assumenda
                impedit dolore.
              </p>
              <ul className="mb-0 list-unstyled">
                <li className="mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-primary"></i>
                  <span>4 Poplar Ave, Orpington BR6 8LA, UK</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-primary"></i>
                  <span>+44 123 456 789</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-envelope mr-3 text-primary"></i>
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
