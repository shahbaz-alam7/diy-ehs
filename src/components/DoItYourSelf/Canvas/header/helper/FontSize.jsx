const FontSize = ({finalFontSize, setFinalFontSize}) => {
  const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 48, 60, 72];
  return (
    <select name="font-size" id="" onSelect={e=>setFinalFontSize(e.target.value)}>
      {sizes.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
export default FontSize;
