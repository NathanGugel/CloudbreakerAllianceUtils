import React from "react";
import { Flex } from "../Flex";
import { Pane } from "../Pane";
import { Colors } from "../Colors";

interface InputProps {
    leftAdornment?: React.ReactNode;
    rightAdornment?: React.ReactNode;
    textAlign?: "left" | "center" | "right";
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
    leftAdornment,
    rightAdornment,
    textAlign = "left",
    value = "",
    onChange,
    style,
}) => {
    return (
        <Pane
            style={{
                borderBottom: `1px solid ${Colors.structure.secondary}`,
                width: "100%",
                ...style,
            }}
        >
            <Flex justifyContent="flex-start">
                {leftAdornment}
                <input
                    value={value}
                    onChange={onChange}
                    style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "16px",
                        fontWeight: "900",
                        minWidth: "0",
                        verticalAlign: "bottom",
                        paddingTop: "4px",
                        textAlign,
                    }}
                    type="text"
                />
                {rightAdornment}
            </Flex>
        </Pane>
    );
};
