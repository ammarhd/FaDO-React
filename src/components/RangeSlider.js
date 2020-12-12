import React, {
  Component,
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";

const RangeSlider = memo(({ classes, onChange, value, ...sliderProps }) => {
  const [sliderVal, setSliderVal] = useState(0);
  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    setSliderVal(value);
  }, [value]);

  const changeCallback = (e) => {
    setSliderVal(e.target.value);
  };

  useEffect(() => {
    if (mouseState === "up") {
      onChange(sliderVal);
    }
  }, [mouseState]);
  console.log("RENDER");

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(sliderVal / 13)}%`;
      ele.style.display = "block";
    }
  });

  return (
    <div className="range-slider">
      <input
        type="range"
        value={sliderVal}
        {...sliderProps}
        className="range"
        id="myRange"
        onChange={changeCallback}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={() => setMouseState("up")}
      />
      <div className="buble">{sliderVal}</div>
    </div>
  );
});

export default RangeSlider;
