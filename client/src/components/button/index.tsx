import { ReactNode } from "react";
import "./styles.css";

type buttonProps = {
  icon: ReactNode;
  text: string;
};

const Button = ({ icon, text }: buttonProps) => {
  return (
    <button className="button__general">
      {icon}
      <div>{text}</div>
    </button>
  );
};

export default Button;
