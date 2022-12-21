import Icon from "../helper/Icon";
import {
  twoDocs,
  addNew,
  deletePic,
  download,
  preview,
  share,
} from "../../../Image/header/pic";
const OtherTools = () => {
  return (
    <div className="other-tools flex">
      <Icon img={addNew} desc="Add Page" left="-5px" />
      <Icon img={twoDocs} desc="Copy" />
      <Icon img={deletePic} desc="Delete" />
      <Icon img={preview} desc="Preview" />
      <Icon img={download} desc="Download" />
      <Icon img={share} desc="Share" />
    </div>
  );
};

export default OtherTools;
