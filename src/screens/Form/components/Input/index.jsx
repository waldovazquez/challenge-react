import React from 'react';

export default function Input({
  name,
  placeholder,
  value,
  setValue = () => { },
}) {
  return (
    <div className="form-group mt-2 mb-2">
      <label htmlFor={name}>{name}</label>
      <input
        className="form-control mt-1"
        type="text"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
