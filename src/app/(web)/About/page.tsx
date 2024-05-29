import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              I have always believed in the power of perseverance and hard work.
              Throughout my life, I have faced numerous challenges, but I have
              never allowed them to deter me from my goals. In school, I
              dedicated countless hours to studying, often staying up late to
              ensure I understood the material thoroughly. When I encountered
              difficult subjects, I sought help and used every resource
              available to improve. Outside of academics, I have applied the
              same determination to my personal growth, learning new skills and
              pushing myself out of my comfort zone. My journey has not been
              easy, but my relentless effort and resilience have helped me
              overcome obstacles and achieve success. This commitment to
              striving for excellence in all I do has shaped me into the person
              I am today.
            </p>
            <div className="mt-8">
              <a
                href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AfcykpfWB0-Q1ZdEtzrR0TdNePtlmeYlXUXgO4aQl-p6C-fI31zC-4fsHNkzLkfxruLx17EvqpB6CK2drX9cyGaJVBD0_2glyqHj9mzLwTiA5A&smuh=56440&lh=Ac8hed9sIRk-fLYq-mQ"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
