import { useState, useEffect } from "react";
import { FaList, FaChevronDown } from "react-icons/fa";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

const CategoryDropdown = ({ value, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );
        // Transform the API data to match our expected format
        const transformedCategories = response.data.map((category) => {
          const IconComponent =
            FaIcons[category.icon] || GiIcons[category.icon] || FaList; // Dynamically resolve the icon
          return {
            value: category.name,
            label: category.name,
            icon: IconComponent, 
          };
        });
        // Add "All Categories" option
        setCategories([
          {
            value: "",
            label: "All Categories",
            icon: FaList,
          },
          ...transformedCategories,
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return (
      <div className="w-full p-3 border border-gray-300 rounded bg-white">
        Loading categories...
      </div>
    );
  }

  const selectedCategory = categories.find((cat) => cat.value === value) || categories[0];

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <selectedCategory.icon className="text-[#F97316]" />
          {selectedCategory.label}
        </div>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {categories.map((category) => (
            <div
              key={category.value}
              className={`flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 ${
                value === category.value ? "bg-blue-50" : ""
              }`}
              onClick={() => {
                onChange(category.value);
                setIsOpen(false);
              }}
            >
              <category.icon className="text-[#F97316]" />
              {category.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
