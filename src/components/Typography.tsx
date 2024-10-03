import "../styles/variables.css";
import "../styles/typography.css";
import React from "react";

type TypeProps = {
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "sub";
    font?: "spooky" | "halloween" | "scream" | "grave";
    children?: React.ReactNode;
};

function Typography({ element, font, children }: TypeProps) {
    function getElemet(): React.ReactNode {
        switch (element) {
            case "h1":
                return <h1 className="spooky-heading">{children}</h1>;
            case "h2":
                return <h2 className="spooky-heading">{children}</h2>;
            case "h3":
                return <h3 className="spooky-heading">{children}</h3>;
            case "h4":
                return <h4 className="spooky-heading">{children}</h4>;
            case "h5":
                return <h5 className="spooky-heading">{children}</h5>;
            case "sub":
                return <sub className="spooky-type">{children}</sub>;
            default:
                return <p className="spooky-type">{children}</p>;
        }
    }

    const e = getElemet();

    return (
        // @ts-ignore - data used for styling
        <div data={font} className="spooky-type-container">
            {e}
        </div>
    );
}

export default Typography;
