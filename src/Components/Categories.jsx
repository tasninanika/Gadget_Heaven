import { NavLink, Outlet } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className=" px-8 md:px-12  mt-12 flex gap-8 mx-auto max-w-[1500px]">
      {/* Left side: Categories list */}
      <div className="w-60 p-4 bg-white rounded-lg shadow-lg ">
        <ul className="space-y-2">
          <li>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold">
              All Product
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.category}>
              <NavLink
                to={`/category/${category.category}`}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full block text-left mt-4"
              >
                {category.category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Outlet (content will change) */}
      <div className="mx-auto rounded-lg ">
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
