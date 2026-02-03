import { forwardRef } from 'react';

function Input({ label }, ref) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(Input);
