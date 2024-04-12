import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
// Assuming you've defined the category array

const Navbar = () => {
  const categoryArray = [
    "Overview",
    "Address",
    "Department",
    "Designation",
    "Announcement",
    "Policies",
    "Admin",
    "Statutory",
    "My Plan",
  ];
  return (
    <nav className="bg-gray-800 py-4 w-[100vw] ">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          {categoryArray.map((category, index) => (
            <li key={index}>
              <Link
                to={`/Company-Profile/${category.toLowerCase()}`}
                className="text-white hover:text-gray-300"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
