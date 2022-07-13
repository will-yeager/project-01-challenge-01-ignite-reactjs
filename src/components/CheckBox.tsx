import { ChangeEvent } from "react";
import "./CheckBox.css";

interface ICheckBoxProps {
  handleChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export const CheckBox = ({ handleChangeCheckBox, isChecked }: ICheckBoxProps) => {
  return (
    <input
      onChange={handleChangeCheckBox}
      checked={isChecked}
      type="checkbox"
      className="checkbox"
    ></input>
  );
};
