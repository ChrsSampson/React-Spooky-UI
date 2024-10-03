import React from "react";

import "../styles/variables.css";
import "../styles/button.css";

type ButtonProps = {
    disabled?: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
    children?: React.ReactNode;
    variant?: "submit" | "skeleton" | "accent" | "danger" | "warn";
    font?: "grave" | "halloween";
    type?: "button" | "submit";
};

function Button({ disabled, onClick, children, variant, label, type }: ButtonProps) {
    if (!label) {
        console.warn(
            "Button: Passing an aria-label prop will allow screen readers to function better."
        );
    }

    return (
        <button
            // @ts-ignore - used for styling
            data={variant}
            aria-label={label || "Button"}
            className="spooky-button"
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
