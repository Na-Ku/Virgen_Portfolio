import React from "react";
import CategoriesOne from "../../Components/CategoriesOne";
import CategoriesTwo from "../../Components/CategoriesTwo";

const AllCategories = () => {
  return (
    <div>
      <div className="container text-center mt-4 shadow border-4 border-dark rounded" style={{ height: "350px" }}>
        <div className="row align-items-center">
          <div className="col-6">
            <h3>Kategori Pertama</h3>
            <CategoriesOne />
          </div>
          <div className="col-6">
            <h3>Kategori Kedua</h3>
            <CategoriesTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
