import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import eventReducer from "../store/EventSlice";
import AddUpcomingReducer from "../store/AddEventSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  event: eventReducer,
  upcomingEvent: AddUpcomingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import AddUpcomingReducer from "../store/AddEventSlice";

// const store = configureStore({
//   reducer: {
//     upcomingEvent: AddUpcomingReducer,
//   },
// });

// export default store;
