import Icon from "../helper/Icon";
import { Paragraphstyle } from "../../../Image/header/pic";
import FontSize from "../helper/FontSize";
import FontWeight from "../helper/FontWeight";
import FontComponent from "../helper/FontFamily";
import ColorPalette from "../ColorPalette";
<<<<<<< HEAD
import { FiAlignCenter } from "../icons";
const FontTools = ({textColor,setTextColor,finalFont,setFinalFont,finalFontSize, setFinalFontSize}) => {
=======

const FontTools = ({
  finalFont,
  setFinalFont,
  finalFontSize,
  setFinalFontSize,
}) => {
>>>>>>> f6fe35ac73c83b14ffe3e21bdc456e1b341bfec7
  //const [finalFont, setFinalFont] = useState("Open Sans");

  return (
    <div className="Font-Tools flex">
      <FontComponent finalFont={finalFont} setFinalFont={setFinalFont} />
      <FontWeight />
<<<<<<< HEAD
      <FontSize finalFontSize={finalFontSize} setFinalFontSize={setFinalFontSize}/>
      <ColorPalette textColor={textColor} setTextColor={setTextColor} />
=======
      <FontSize
        finalFontSize={finalFontSize}
        setFinalFontSize={setFinalFontSize}
      />
      <ColorPalette />
>>>>>>> f6fe35ac73c83b14ffe3e21bdc456e1b341bfec7
      <div className="hex-code">
        <p>{textColor}</p>
      </div>
      <Icon img={Paragraphstyle} />
    </div>
  );
};

export default FontTools;
