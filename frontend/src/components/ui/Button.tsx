import { ReactElement } from "react";

type Variants = "primary" | "secondary"
interface ButtonProps{
  variant: Variants ;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles: {[key: Variants]: string} = {
  "default": "bg-purple-600 text-white",

export const Button = (props: ButtonProps) => {
  if(props.variant === "primary"){
    if(props.size === "lg"){

    }
  }
  return <button></button>
}
<Button endIcon={"+"} variant = "primary" size = "md" onClick= {() => {}} text= {"asd"} startIcon= {"-"} />