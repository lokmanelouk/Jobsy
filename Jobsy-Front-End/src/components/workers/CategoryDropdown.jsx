import { useState } from 'react';
import { 
  FaBolt, FaWater, FaBroom, FaTruckMoving, FaList,
  FaChevronDown 
} from 'react-icons/fa';

const CategoryDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    { value: "", label: "All Categories", icon: <FaList className="text-[#F97316]" /> },
    { value: "Electrician", label: "Electrician", icon: <FaBolt className="text-yellow-500" /> },
    { value: "Plumbing", label: "Plumbing", icon: <FaWater className="text-blue-500" /> },
    { value: "Cleaning", label: "Cleaning", icon: <FaBroom className="text-green-500" /> },
    { value: "Moving", label: "Moving", icon: <FaTruckMoving className="text-purple-500" /> }
  ];

  const selectedCategory = categories.find(cat => cat.value === value) || categories[0];

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {selectedCategory.icon}
          {selectedCategory.label}
        </div>
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {categories.map((category) => (
            <div
              key={category.value}
              className={`flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 ${value === category.value ? 'bg-blue-50' : ''}`}
              onClick={() => {
                onChange(category.value);
                setIsOpen(false);
              }}
            >
              {category.icon}
              {category.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default CategoryDropdown
