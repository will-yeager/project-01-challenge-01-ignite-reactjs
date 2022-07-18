import { HiCheck } from "react-icons/hi";
import { ImRadioUnchecked } from "react-icons/im";
import "./CheckBox.css";

interface ICheckBoxProps {
  handleChangeCheckBox: (isChecked: boolean) => void;
  isChecked: boolean;
}

export const CheckBox = ({
  handleChangeCheckBox,
  isChecked,
}: ICheckBoxProps) => {
  return (
    <>
      {isChecked ? (
        <button className="checkbox-button-checked" onClick={() => handleChangeCheckBox(!isChecked)}>
          <HiCheck className="checkbox-checked" />
        </button>
      ) : (
        <button className="checkbox-button-unchecked" onClick={() => handleChangeCheckBox(!isChecked)}>
          <ImRadioUnchecked className="checkbox-unchecked" />
        </button>
      )}
    </>
  );
};
