import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
    return(
        <div id="contact" className="pt-32">
            <h1 className="text-blue-500 font-bold text-6xl text-center">Contact</h1>

        <div className="pt-10 grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">

            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold">Lets Talk</h1>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we l would love to hear about your project and provide help.</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong><a target="_blank" href="mailto:aamirsafa9@gmail.com">Email here</a></strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>
<ul className="flex space-x-4 mt-4">
      {/* LinkedIn */}
      <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
        <a href="https://www.linkedin.com/in/safa-aamir-823b582b1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-blue-600 hover:text-blue-800 transition duration-300" />
        </a>
      </li>

      {/* GitHub */}
      <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
        <a href="https://github.com/isafabaig" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-black hover:text-gray-800 transition duration-300" />
        </a>
      </li>
    </ul>

                </div>
            </div>

            <form className="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <textarea placeholder='Message' rows={6}
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                <button type='button'
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
            </form>
        </div>
        </div>

    )
}
export default Contacts