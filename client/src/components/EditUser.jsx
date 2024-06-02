import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditUser = ({ isOpen, userId }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/updateUser/${userId}`,
        {
          name,
          fatherName,
          email,
          phoneNumber: phone,
        }
      );

      console.log(response);
      toast.success("USER CREATED SUCCESSFULLY");
      setShowModal(false);
    } catch (error) {
      console.log("ERROR OCCURED WHILE CREATING NEW USER");
      toast.error("Something went wrong");
    }
  };

  const modalHandler = (val) => {
    setShowModal(val);
  };

  return (
    <div className="App">
      {showModal && (
        <div
          className="py-12 bg-white transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1 className="text-gray-800 text-xl text-center font-bold tracking-normal leading-tight mb-4">
                ADD NEW USER
              </h1>

              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Dev"
                onChange={(e) => setName(e.target.value)}
              />

              <label
                htmlFor="fname"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Father Name
              </label>
              <input
                type="text"
                id="fname"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Manish bhai"
                onChange={(e) => setFatherName(e.target.value)}
              />

              <label
                htmlFor="email"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor="phone"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="9987887811"
                onChange={(e) => setPhone(e.target.value)}
              />

              <div className="flex items-center justify-center w-full">
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={() => modalHandler(false)}
                >
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={() => modalHandler(false)}
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUser;
