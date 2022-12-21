import Icon from "../helper/Icon";
import {
  twoDocs,
  addNew,
  deletePic,
  download,
  preview,
  share,
} from "../../../Image/header/pic";

import {clonePage } from "../../../../../reduxStore/actions/pageActions";
import { useDispatch } from "react-redux";
const OtherTools = () => {

  const dispatch =useDispatch(); 
  return (

    <div className="other-tools flex" onClick={()=>{console.log("clicked");dispatch(clonePage())}}>
          <Icon img={addNew} desc="Add_Page" left="-5px" />
      <Icon img={twoDocs} desc="Copy" />
      <Icon img={deletePic} desc="Delete" />
      <Icon img={preview} desc="Preview" />
      <Icon img={download} desc="Download" />
      <Icon img={share} desc="Share" />
    </div>
  );
};

export default OtherTools;
