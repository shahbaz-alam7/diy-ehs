import FontPicker from "font-picker-react";
const FontComponent = ({ finalFont, setFinalFont }) => {
  return (
    <div className="font-family-tool">
      <FontPicker
        apiKey="AIzaSyDZyIxM4tyvQ9iwAxC9R7wZJilaORy5waw"
        activeFontFamily={finalFont}
        limit={200}
        onChange={(nextFont) => {
          setFinalFont(nextFont.family);
        }}
      />
    </div>
  );
};
export default FontComponent;
