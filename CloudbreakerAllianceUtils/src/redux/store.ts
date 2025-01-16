import { configureStore } from "@reduxjs/toolkit";
import { playerInfoApi } from "./playerInfoSlice";

export const store = configureStore({
    reducer: {
        [playerInfoApi.reducerPath]: playerInfoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(playerInfoApi.middleware),
});

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
