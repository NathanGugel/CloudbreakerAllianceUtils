// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlayerType } from "../entityTypes";

// const initialState: PlayerType = {
//     id: 0,
//     playerName: "",
//     characterName: "",
//     level: 0,
//     exp: 0,
//     lifeform: "",
//     primaryClass: "",
//     secondaryClass: "",
// };

export const playerInfoApi = createApi({
    reducerPath: "playerInfoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getPlayerById: builder.query<PlayerType, number>({
            query: (id) => `player/${id}`,
            // providesTags: ["Player"],
        }),
        updatePlayer: builder.mutation<
            PlayerType,
            Partial<PlayerType> & Pick<PlayerType, "id">
        >({
            query: ({ id, ...patch }) => ({
                url: `/player/${id}`,
                method: "PATCH",
                body: patch,
            }),
            // invalidatesTags: ["Player"],
        }),
    }),
    tagTypes: ["Player"],
});

// export const playerInfoSlice = createSlice({
//     name: "playerInfo",
//     initialState,
//     reducers: {
//         setPlayerName: (state, action: PayloadAction<string>) => {
//             state.playerName = action.payload;
//         },
//         setCharacterName: (state, action: PayloadAction<string>) => {
//             state.characterName = action.payload;
//         },
//         setLevel: (state, action: PayloadAction<number>) => {
//             state.level = action.payload;
//         },
//         setExp: (state, action: PayloadAction<number>) => {
//             state.exp = action.payload;
//         },
//         setLifeform: (state, action: PayloadAction<string>) => {
//             state.lifeform = action.payload;
//         },
//         setPrimaryClass: (state, action: PayloadAction<string>) => {
//             state.primaryClass = action.payload;
//         },
//         setSecondaryClass: (state, action: PayloadAction<string>) => {
//             state.secondaryClass = action.payload;
//         },
//     },
// });

export const { useGetPlayerByIdQuery, useUpdatePlayerMutation } = playerInfoApi;

// export const {
//     setPlayerName,
//     setCharacterName,
//     setLevel,
//     setExp,
//     setLifeform,
//     setPrimaryClass,
//     setSecondaryClass,
// } = playerInfoSlice.actions;

// export default playerInfoSlice.reducer;
