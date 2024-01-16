export default function filterTheLastIndex(
  keyCode,
  setSelectedList,
  setHighlight,
  highlight
) {
  if (keyCode === "Backspace") {
    if (highlight) {
      setSelectedList((list) =>
        list.filter((item, index) => index != list.length - 1)
      );
    //   setHighlight(false);
    } else {
      setHighlight(true);
    }
  }
}
