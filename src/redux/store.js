import { configureStore } from "@reduxjs/toolkit";
import { drugsReducer } from "./drugsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const drugsPersistConfig = {
  key: "drugs",
  storage,
  whitelist: ["cart"],
};

export const store = configureStore({
  reducer: {
    drugsStore: persistReducer(drugsPersistConfig, drugsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
