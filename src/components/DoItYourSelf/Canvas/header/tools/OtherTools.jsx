import Icon from "../helper/Icon";

import {
  BiDownload,
  IoDocumentsOutline,
  TiDocumentAdd,
  RiDeleteBinLine,
  MdIosShare,
  MdPreview,
} from "../icons";
const OtherTools = () => {
  return (
    <div className="other-tools flex">
      <Icon icon={<TiDocumentAdd className="icon" />} desc="Copy" left="-5px"  />
      <Icon icon={<IoDocumentsOutline className="icon" />} desc="Add_Page" />
      <Icon icon={<RiDeleteBinLine className="icon" />} desc="Delete" />
      <Icon icon={<MdPreview className="icon" />} desc="Preview" />
      <Icon icon={<BiDownload className="icon" />} desc="Download" />
      <Icon icon={<MdIosShare className="icon" />} desc="Share" />
    </div>
  );
};

export default OtherTools;
