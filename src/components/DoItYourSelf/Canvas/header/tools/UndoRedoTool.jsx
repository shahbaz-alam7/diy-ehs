import Icon from "../helper/Icon";

import { BiUndo, BiRedo } from "../icons";

const UndoRedoTool = () => {
  return (
    <div className="back-forward flex">
      <Icon icon={<BiUndo className="icon" />} desc="Back" left="0" />
      <Icon icon={<BiRedo className="icon" />} desc="Forward" />
    </div>
  );
};

export default UndoRedoTool;
