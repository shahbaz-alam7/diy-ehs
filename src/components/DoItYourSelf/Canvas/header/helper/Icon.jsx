const Icon = ({ icon, desc, left }) => {
  return (
    <div className="icon-div">
      {icon} <div className="tooltip triangle"></div>
      <span className="tooltip" style={{ left: left }}>
        {desc}
      </span>
    </div>
  );
};

export default Icon;
