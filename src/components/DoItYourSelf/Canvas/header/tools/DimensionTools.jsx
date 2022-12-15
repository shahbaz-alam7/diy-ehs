import Icon from "../helper/Icon";

import { GrDocument } from "../icons";
const DimensionTools = () => {
  const style = {
    paddingTop: "8px",
    marginRight: "-10px",
    marginLeft: "10px",
  };
  return (
    <div className="d-tools flex">
      <select name="dimension" id="">
        <option value="7 x 14 in">7 x 14 in</option>
        <option value="10 x 14 in">10 x 14 in</option>
        <option value="14 x 7 in">14 x 7 in</option>
        <option value="7 x 14 in">7 x 14 in</option>
      </select>
      <h4 style={style}>W</h4>
      <select name="width" id="">
        <option value="7 in">7 in</option>
        <option value="10 in">10 in</option>
        <option value="14 in">14 in</option>
        <option value="20 in">20 in</option>
      </select>
      <h4 style={style}>H</h4>
      <select name="width" id="">
        <option value="7 in">7 in</option>
        <option value="10 in">10 in</option>
        <option value="14 in">14 in</option>
        <option value="20 in">20 in</option>
      </select>
      <select name="unit" id="">
        <option value="in">in</option>
        <option value="cm">cm</option>
        <option value="ft">ft</option>
        <option value="m">m</option>
      </select>
      <Icon icon={<GrDocument className="icon" />} />
      <Icon icon={<GrDocument className="icon landscape-pic" />} />
    </div>
  );
};

export default DimensionTools;
