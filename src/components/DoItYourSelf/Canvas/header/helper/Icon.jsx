const Icon = ({ img, icon, desc, left }) => {
  return (
    <div className="icon-div">
      <img src={img} alt=""  className="icon"/>
      {icon}
      <div className="tooltip triangle"></div>
      <span className="tooltip" style={{ left: left }}>
        {desc}
      </span>
    </div>
  );
};

export default Icon;
