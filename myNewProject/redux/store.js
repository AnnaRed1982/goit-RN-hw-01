import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authSlice } from "./auth/authReducer";

const authPersistConfig = {
  key: "auth",
  AsyncStorage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

// const reducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export default { store, persistor };

export const store = configureStore({ reducer: rootReducer });