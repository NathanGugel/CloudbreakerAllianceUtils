import React from "react";

type Border = {
    lineWidth: number;
    lineStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    color: string;
};

type BorderRadius = {
    topLeft: `${number}px`;
    topRight: `${number}px`;
    bottomLeft: `${number}px`;
    bottomRight: `${number}px`;
};

interface PaneProps {
    backgroundColor?: `#{number}`;
    border?: Border;
    borderRadius?: BorderRadius;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const Pane: React.FC<PaneProps> = ({
    backgroundColor,
    border,
    borderRadius,
    style,
    children,
}) => {
    return (
        <div
            style={{
                backgroundColor,
                border: `${border?.lineWidth}px ${border?.lineStyle} ${border?.color}`,
                borderTopLeftRadius: `${borderRadius?.topLeft}`,
                borderTopRightRadius: `${borderRadius?.topRight}`,
                borderBottomLeftRadius: `${borderRadius?.bottomLeft}`,
                borderBottomRightRadius: `${borderRadius?.bottomRight}`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
