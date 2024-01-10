import React from "react";

const InputLabel = ({
  labelText,
  inputType,
  placeholder,
  value,
  onChange,
  refInput,
  submit,
  values,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingBottom: "10px",
      }}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={refInput}
      />
      {submit && !values ? <label>{labelText}</label> : null}
    </div>
  );
};

export default InputLabel;
