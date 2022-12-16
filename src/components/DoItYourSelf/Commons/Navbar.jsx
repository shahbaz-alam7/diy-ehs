import { IoMenu } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { MdClear } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Untitled Design");
  const [active, setActive] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const userAccount = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={active ? "active" : ""}>
        <div className="nav-panel">
          <Navpanel setActive={setActive} />
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src="./companylogo.png" alt="logo" />
          {active ? (
            <MdClear className="icon" onClick={() => setActive(false)} />
          ) : (
            <IoMenu className="icon" onClick={() => setActive(true)} />
          )}
        </div>
        <div className="diy-title">
          {editTitle ? (
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <p>{title}</p>
          )}
          <BiPencil
            className="icons"
            onClick={() => setEditTitle(!editTitle)}
          />
        </div>
        <div className="user-account">
          <VscAccount className="icons" onClick={userAccount} />
          {open ? (
            <BsChevronDown className="icons" />
          ) : (
            <BsChevronUp className="icons" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

const Navpanel = ({ setActive }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="panel">
      <MdClear className="icon" onClick={() => setActive(false)} />
      <div className="links">
        <ul>
          <li>
            <div className={show ? "show-nested" : ""}>
              Categories
              {show ? (
                <IoIosArrowBack onClick={() => setShow(!show)} />
              ) : (
                <IoIosArrowForward onClick={() => setShow(!show)} />
              )}
              <ul className="nested-list">
                <li>Posters</li>
                <li>Siganges</li>
                <li>Floor Graphics</li>
                <li>Asset Markings</li>
                <li>Pictograms</li>
              </ul>
            </div>
          </li>
          <li>Campaings</li>
          <li>Resources</li>
          <li>Bulk Order</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
