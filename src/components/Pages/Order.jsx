import React, { useState } from "react";
import "./order.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import mat_img from "../../images/material.png";
import { deletePic } from "../DoItYourSelf/Image/header/pic";
const Order = () => {
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    setQty((pval) => {
      if (pval <= 1) return 1;
      return pval - 1;
    });
  };
  return (
    <div className="order-container">
      <div className="all-designs">
        <div className="each_design">
          <p>Untitled Design 1</p>
        </div>
        <div className="each_design">
          <p>Untitled Design 2</p>
        </div>
        <div className="each_design">
          <p>Untitled Design 3</p>
        </div>
        <div className="each_design">
          <p>Untitled Design 4</p>
        </div>
      </div>
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
            <p className="title">Quality:</p>
            <div className="qty_checker">
              <span>
                <FaMinus onClick={decreaseQty} />
              </span>
              <section>{qty}</section>
              <span>
                <FaPlus onClick={increaseQty} />
              </span>
            </div>
          </div>
          <div className="description">
            <p>
              Posters include 3M double-sided mounting tape on top and bottom.
            </p>
            <p>The Interior warranty is three years.</p>
            <p>
              Printing material variant Self-adhesive vinyl is premium quality.
            </p>
            <p>
              3M film with Mat Laminate. Both Interior and Exterior warranty is
              of three years.
            </p>
            <p>
              Prices are inclusive of G.S.T Shipping free for orders above two
              thousand (2000/-) Indian rupees.
            </p>
            <p>Performa invoices can be generated at checkout</p>
          </div>
        </div>
        <div className="summary-box">
          <p className="heading">Order Summary(Create Your Own)</p>
          <div className="order">
            <div>
              <p className="sub-heading">Untitled Design 1</p>
              <p className="desc">
                Self-adhesive 3mm sunboard (Premium) 100 Prints
              </p>
            </div>
            <img src={deletePic} alt="" />
            <p className="sub-heading">&#8377;1000</p>
          </div>
          <div className="order">
            <div>
              <p className="sub-heading">Untitled Design 1</p>
              <p className="desc">
                Self-adhesive 3mm sunboard (Premium) 100 Prints
              </p>
            </div>
            <img src={deletePic} alt="" />
            <p className="sub-heading">&#8377;1000</p>
          </div>
          <div className="order">
            <div>
              <p className="sub-heading">Coupon Discount</p>
              <p className="coupon">Apply Coupon</p>
            </div>
            <p className="sub-heading">&#8377;0</p>
          </div>

          <div className="order">
            <div>
              <p className="sub-heading">Delivery Charge</p>
              <p className="desc"> Shipping Free on orders above &#8377;2000</p>
            </div>
            <p className="sub-heading">FREE</p>
          </div>
          <div className="line" />
          <div className="order">
            <p className="ttl">Total</p>
            <p className="ttl">&#8377;2000</p>
          </div>
          <div className="btn-box">
            <button>Add to Cart</button>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
