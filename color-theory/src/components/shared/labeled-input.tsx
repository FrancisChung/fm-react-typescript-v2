import clsx from 'clsx';
import { ChangeEventHandler, useId } from 'react';

type LabeledInputProps = {
  id?: string;
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const LabeledInput = ({
  label,
  id,
  onChange,
  ...props
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        readOnly={!onChange}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
