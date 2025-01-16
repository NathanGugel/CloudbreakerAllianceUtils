import React from "react";

interface FlexProps {
    column?: boolean;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch";
    alignItems?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch";
    gap?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
    column = false,
    justifyContent = "center",
    alignItems = "center",
    gap,
    style,
    children,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: column ? "column" : "row",
                justifyContent,
                alignItems,
                gap,
                boxSizing: "border-box",
                ...style,
            }}
        >
            {children}
        </div>
    );
};
