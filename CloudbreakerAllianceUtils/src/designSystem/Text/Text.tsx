import React from "react";

interface TextProps {
    children: React.ReactNode;
    fullWidth?: boolean;
    style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
    children,
    fullWidth = true,
    style,
}) => {
    return (
        <span
            style={{
                minWidth: `${fullWidth ? "max-content" : undefined}`,
                textAlign: "left",
                fontWeight: "900",
                ...style,
            }}
        >
            {children}
        </span>
    );
};
