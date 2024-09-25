import React, { useState } from "react";

export default function SearchForm() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <form className="flex justify-between items-center p-2 w-full max-w-5xl relative">

        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-3 pl-4 w-full text-base text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Produk apa yang anda cari hari ini?"
            required
          />
          {/* Search Button */}
          <button
            type="button"
            className="absolute top-0 right-0 p-3 h-full text-sm font-medium text-white bg-[#B49B6C] rounded-r-full border border-[#B49B6C] hover:bg-[#9f8958] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#B49B6C] dark:hover:bg-[#9f8958] dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
    </form>
  );
}
