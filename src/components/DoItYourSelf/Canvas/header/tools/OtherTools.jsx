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
<<<<<<< HEAD
      <Icon icon={<TiDocumentAdd className="icon" />} desc="Copy" left="-5px"  />
      <Icon icon={<IoDocumentsOutline className="icon" />} desc="Add_Page" />
      <Icon icon={<RiDeleteBinLine className="icon" />} desc="Delete" />
      <Icon icon={<MdPreview className="icon" />} desc="Preview" />
      <Icon icon={<BiDownload className="icon" />} desc="Download" />
      <Icon icon={<MdIosShare className="icon" />} desc="Share" />
=======
      <Icon img={addNew} desc="Copy" left="-5px" />
      <Icon img={twoDocs} desc="Add_Page" />
      <Icon img={deletePic} desc="Delete" />
      <Icon img={preview} desc="Preview" />
      <Icon img={download} desc="Download" />
      <Icon img={share} desc="Share" />
>>>>>>> f6fe35ac73c83b14ffe3e21bdc456e1b341bfec7
    </div>
  );
};

export default OtherTools;
