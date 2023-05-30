import React from "react";
import CategoriesOne from "../../Components/CategoriesOne";
import CategoriesTwo from "../../Components/CategoriesTwo";

const AllCategories = () => {
  return (
    <div>
      <div className="container text-center mt-4">
        <div className="row align-items-center">
          <div className="col-6">
            <CategoriesOne />
          </div>
          <div className="col-6">
            <CategoriesTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
