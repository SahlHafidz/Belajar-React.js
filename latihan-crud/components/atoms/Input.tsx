import { Input as AntInput, InputProps } from "antd";

const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};

export default Input;
