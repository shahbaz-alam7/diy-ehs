import React, { useState } from "react";
import axios from "axios";
import { FileDrop } from "react-file-drop";
import "./styles/canvasSize.css";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { uploadLogo } from "../../../reduxStore/actions/commonAction";
const API = "http://localhost:8000";
const UploadFile = ({ setOpenSlider }) => {
  const [imgUrl, setImgUrl] = useState([]);
const dispatch = useDispatch()
  const uploadImg = async (e) => {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("imgUrl", file);
      console.log(formData)
  
      await axios
        .post(`${API}/posters/uploadFile`, formData)
        .then((response) =>{
        console.log(response);
          setImgUrl([...imgUrl, response.data.data.fileSavedUrl])
          let pageId="639c615fa1e9f717f4b75073"
          dispatch(uploadLogo(response.data.data.fileSavedUrl,pageId))
    });
  
    };
  const styles = {
    border: "1px solid black",
    width: "190px",
    color: "black",
    height: "267px",
    border: "0.5px solid #EAEAEA",
    borderRadius: "2px",
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const dropHandler = (files, event) => {
    console.log("onDrop!", files, event);
  };
  return (
    <div className="canvas_size">
      <button
        onClick={() => {
          setOpenSlider(false);
        }}
      >
        close
      </button>
      <div className="search-div">
        <IoSearchSharp className="icon" />{" "}
        <input
          type="text"
          name="searcg_template"
          placeholder="Search templates"
        />
      </div>
      <div className="categories-div-panel">
        <p className="heading">Upload files here</p>
        <input
                  type="file"
                  id="file"
                  className="file__upload"
                  onChange={(e) => uploadImg(e)}
                />
        <div className="drag-drop">
          <FileDrop onDrop={(files, event) => dropHandler(files, event)}>
            Drag & Drop Image here
          </FileDrop>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
