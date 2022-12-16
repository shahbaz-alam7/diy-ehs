import React from "react";
import "./order.css";
import {FaMinus ,FaPlus} from "react-icons/fa"
import mat_img from "../../images/material.png";
const Order = () => {
  return (
    <div className="order-page">
      <div className="design-box">
        <div className="img-box"></div>
        <div className="btn-box">
          <button>Edit Design</button>
          <button>Create New</button>
        </div>
      </div>
      <div className="description-box">
        <p className="title">Untiled Design</p>
        <div className="cat-name">
          <span className="title">Category:</span>
          <span className="title">Poster</span>
        </div>
        <div>
          <span className="title">Canvas Size:</span>
          <select name="dimension" className="dimension-select">
            <option value="7">7 x 14</option>
            <option value="9">7 x 24</option>
            <option value="11">14 x 7</option>
            <option value="14">14 x 24</option>
            <option value="18">24 x 28</option>
          </select>
        </div>
        <div>
          <span style={{ marginRight: "28px" }} className="title">
            Material:
          </span>
          <select name="material" id="">
            <option value="abc">abcabcabc</option>
            <option value="xyz">xyz</option>
            <option value="pqr">pqr</option>
            <option value="mno">mno</option>
            <option value="ijk">ijk</option>
          </select>
        </div>
        <div className="material-desc">
          <img src={mat_img} alt="img" />
          <p>
            Self-adhesive 3mm sunboard (Premium) Price: ₹100 per print
            (Inclusive of all taxes)
          </p>
        </div>
        <div className="qty">
          <p className="title">Quality</p>
          <div><FaMinus/><input type="text" name="" id="" /><FaPlus/></div>
        </div>
        <p>
          Posters include 3M double-sided mounting tape on top and bottom. The
          Interior warranty is three years. Printing material variant
          Self-adhesive vinyl is premium quality. 3M film with Mat Laminate.
          Both Interior and Exterior warranty is of three years. Prices are
          inclusive of G.S.T Shipping free for orders above two thousand
          (2000/=) Indian rupees. Performa invoices can be generated at checkout
        </p>
      </div>
      <div className="summary-box">3</div>
    </div>
  );
};

export default Order;
