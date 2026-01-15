import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex bg-white">

      {/* LEFT IMAGE SECTION */}

      <div className="w-1/2 relative hidden lg:block">
        <img
          src="https://framerusercontent.com/images/PvawYUzGU2gTCJpv3UqZk72gg.png?scale-down-to=1024"
          alt="Interior"
          className="w-full h-full object-cover rounded-r-3xl"
        />

        {/* BOTTOM INFO */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold">Email</p>
              <p>hi@yoursite.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p>(302) 555-6789</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p>Dover, DE 19901</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}

      <div className="w-full lg:w-1/2 px-10 py-16 flex flex-col justify-center">

        <h1 className="text-5xl font-bold mb-4">Let's talk</h1>
        <p className="text-gray-500 mb-10">
          I’d love to hear from you! Whether you have a question or a project in mind,
          feel free to reach out.
        </p>

        {/* FORM */}
        
        <form className="space-y-6">

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Axel Smith"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="hi@axel.com"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Company</label>
              <input
                type="text"
                placeholder="Dream Studio"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Project budget</label>
              <select
                className="w-full border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option>Select your budget</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">How I can help?</label>
            <textarea
              rows="4"
              placeholder="Tell me about your needs"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Get in touch
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
