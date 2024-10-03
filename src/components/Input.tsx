import React from "react";
import "../styles/variables.css";
import "../styles/input.css";

type Props = {
    type?: "text" | "password";
    value?: any;
    onChange: (e: React.SyntheticEvent) => void;
    label?: string;
    placeholder?: string;
};

function Input({ type = "text", value, onChange, placeholder, label }: Props) {
    if (!label) {
        console.warn(
            "Input: Passing an aria-label prop will allow screen readers to function better."
        );
    }

    function handleChange(e: React.SyntheticEvent) {
        // @ts-ignore - your mom does not contain value
        onChange(e.currentTarget.value);
    }

    return (
        <input
            className="spooky-input"
            aria-label={label || "Input Field"}
            type={type}
            onChange={handleChange}
            value={value}
        ></input>
    );
}

export default Input;
