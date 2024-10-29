const servicesData = [
  {
    title: "Program management",
    description:
      "RBSL offers expert program management for complex IT transformation projects using Prince2, PMP, and Agile methodologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 384 512"
      >
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    ),
  },
  {
    title: "Application Services",
    description:
      "We provide customized application development, modernization, and integration to optimize business processes and support digital transformation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 576 512"
      >
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
      </svg>
    ),
  },
  {
    title: "Data Center Services",
    description:
      "Our team specializes in datacenter migration, transformation, and consolidation, ensuring optimal performance and cloud integration.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 576 512"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z " />
      </svg>
    ),
  },
  {
    title: "BPO",
    description:
      "RBSL delivers tailored BPO solutions to improve efficiency in customer service, data processing, and administrative tasks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 512 512"
      >
        <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
      </svg>
    ),
  },
  {
    title: "Cloud & IT Infrastructure",
    description:
      "We design and implement scalable cloud strategies, enabling seamless migration to secure public, private, or hybrid cloud environments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 640 512"
      >
        <path d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
      </svg>
    ),
  },
  {
    title: "Data & Artificial Intelligence",
    description:
      "We leverage AI and data analytics to deliver predictive insights and drive innovation for smarter business decisions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          color="currentColor"
        >
          <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12" />
          <path d="m7.5 15l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m-4-2h3m4-4v6M8 2v2m8-2v2m-4-2v2M8 20v2m4-2v2m4-2v2m6-6h-2M4 8H2m2 8H2m2-4H2m20-4h-2m2 4h-2" />
        </g>
      </svg>
    ),
  },
  {
    title: "Network Services",
    description:
      "RBSL provides scalable and secure network solutions, including SD-WAN, to ensure reliable and efficient connectivity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h10V9h2v4h2q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm2-3q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m3.5 0q.425 0 .713-.288T11.5 17t-.288-.712T10.5 16t-.712.288T9.5 17t.288.713t.712.287m3.5 0q.425 0 .713-.288T15 17t-.288-.712T14 16t-.712.288T13 17t.288.713T14 18m.25-9.75L12.8 6.8q.65-.6 1.45-.95T16 5.5t1.75.35t1.45.95l-1.45 1.45q-.35-.35-.788-.55T16 7.5t-.963.2t-.787.55m-2.5-2.5l-1.4-1.4q1.1-1.1 2.55-1.725T16 2t3.1.625t2.55 1.725l-1.4 1.4q-.825-.825-1.912-1.287T16 4t-2.337.463T11.75 5.75"
        />
      </svg>
    ),
  },
  {
    title: "Cyber Security",
    description:
      "Our cybersecurity services protect your business from evolving threats, ensuring robust security and compliance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 576 512"
      >
        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
      </svg>
    ),
  },
  {
    title: "Digital workplace",
    description:
      "We enable modern, collaborative digital workplaces with tools that enhance remote working and productivity across your organization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 22V2h20v16H6zm4-8h8v-2H6zm0-3h12V9H6zm0-3h12V6H6z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm mx-auto max-w-7xl px-6 md:p-20">
        {servicesData.map((service, index) => (
          <div className="p-3" key={index}>
            <div className="flex justify-center mb-3">
              <div className="w-20 h-20 border-2 rounded-full border-teal-500 flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
