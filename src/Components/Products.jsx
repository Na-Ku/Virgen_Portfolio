import React from "react";
import hero1 from "../Aset/Images/hero1.jpg";

const Products = () => {
  return (
    <div>
      <div className="container text-center mt-4 shadow border-4 border-dark rounded">
        <div className="row justify-content-start">
          <p>
            Promo Bulan Ini{" "}
            <span>
              <a href="#go">Lihat Semua</a>
            </span>
          </p>
        </div>
        <div className="row justify-content-end">
          <div className="col">
            <div className="card me-1" style={{ width: "13rem" }}>
              <img src={hero1} className="card-img-top" alt="oke" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Rp. Harga</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "13rem" }}>
              <img src={hero1} className="card-img-top" alt="oke" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Rp. Harga</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "13rem" }}>
              <img src={hero1} className="card-img-top" alt="oke" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Rp. Harga </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "13rem" }}>
              <img src={hero1} className="card-img-top" alt="oke" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"> Rp. Harga </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
