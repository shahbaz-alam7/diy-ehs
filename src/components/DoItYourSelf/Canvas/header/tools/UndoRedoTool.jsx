import Icon from "../helper/Icon";

import { undo, redo } from "../../../Image/header/pic";
const UndoRedoTool = () => {
  return (
    <div className="back-forward flex">
      <Icon img={undo} desc="Back" left="" />
      <Icon img={redo} desc="Forward" />
    </div>
  );
};

export default UndoRedoTool;
