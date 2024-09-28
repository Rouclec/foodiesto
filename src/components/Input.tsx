import React, { FC, InputHTMLAttributes } from "react";
import Select from "react-dropdown-select";

interface Props {
  item: {
    title: string;
    value: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onSelect?: (value: { label: string; value: string }[]) => void;
    dropdown?: boolean;
    options?: { label: string; value: string }[];
  };
}

const Input: FC<Props> = ({ item }) => {
  return (
    <div className="h-[60px] rounded-lg py-3 px-5 bg-grey-210">
      <p>{item.title}</p>
      {item.dropdown && item.onSelect ? (
        <Select
          options={item.options ?? []}
          onChange={item.onSelect}
          values={[]}
          labelField="label"
          valueField="value"
          style={{
            border: "none",
            outline: 0,
            padding: 0,
            height: 12,
          }}
          placeholder=""
        />
      ) : (
        <input
          value={item.value}
          onChange={item.onChange}
          className="border-0 focus:outline-none h-6"
        />
      )}
    </div>
  );
};

export default Input;
