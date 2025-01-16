import React from "react";
import { Colors, Flex, Input, Pane, Text } from "../../designSystem";
import {
    useGetPlayerByIdQuery,
    useUpdatePlayerMutation,
} from "../../redux/playerInfoSlice";

export const PlayerInfo: React.FC = () => {
    const { data } = useGetPlayerByIdQuery(1);

    const [updatePlayer] = useUpdatePlayerMutation();

    return (
        <Pane
            border={{
                lineWidth: 8,
                lineStyle: "solid",
                color: Colors.structure.secondary,
            }}
            borderRadius={{
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "0px",
                bottomRight: "0px",
            }}
            style={{ width: "100%" }}
        >
            <Flex
                column
                alignItems="flex-start"
                style={{ padding: "8px", width: "100%" }}
            >
                <Input
                    leftAdornment={<Text>Player Name:</Text>}
                    value={data?.playerName}
                    onChange={(event) => {
                        console.log("bleep", event.target.value);
                        updatePlayer({ id: 1, playerName: event.target.value });
                    }}
                />
                <Flex
                    style={{
                        width: "100%",
                    }}
                >
                    <Input
                        leftAdornment={<Text>Character Name:</Text>}
                        value={data?.characterName}
                        onChange={(event) => {
                            updatePlayer({
                                id: 1,
                                characterName: event.target.value,
                            });
                        }}
                        style={{
                            flex: "1 0 100px",
                            minWidth: "0",
                        }}
                    />
                    <Input
                        leftAdornment={<Text>Level:</Text>}
                        textAlign="center"
                        value={data?.level.toString()}
                        onChange={(event) => {
                            updatePlayer({
                                id: 1,
                                level: +event.target.value,
                            });
                        }}
                        style={{
                            flex: "0 0 4em",
                            minWidth: "15%",
                        }}
                    />
                    <Input
                        leftAdornment={<Text>{"("}</Text>}
                        rightAdornment={<Text>{") EXP"}</Text>}
                        textAlign="center"
                        value={data?.exp.toString()}
                        onChange={(event) => {
                            updatePlayer({ id: 1, exp: +event.target.value });
                        }}
                        style={{
                            flex: "0 0 4em",
                            minWidth: "12.5%",
                        }}
                    />
                </Flex>
                <Input
                    leftAdornment={<Text>Lifeform:</Text>}
                    value={data?.lifeform}
                    onChange={(event) => {
                        updatePlayer({
                            id: 1,
                            lifeform: event.target.value,
                        });
                    }}
                />
                <Input
                    leftAdornment={<Text>Primary Class:</Text>}
                    value={data?.primaryClass}
                    onChange={(event) => {
                        updatePlayer({
                            id: 1,
                            primaryClass: event.target.value,
                        });
                    }}
                />
                <Input
                    leftAdornment={<Text>Secondary Class:</Text>}
                    value={data?.secondaryClass}
                    onChange={(event) => {
                        updatePlayer({
                            id: 1,
                            secondaryClass: event.target.value,
                        });
                    }}
                />
            </Flex>
        </Pane>
    );
};
