import { configureStore } from "@reduxjs/toolkit";
import userModeReducer from "../features/counter/userModeSlice";

export const store = configureStore({
  reducer: {
    mode: userModeReducer,
  },
});

// const count = useSelector((state) => state.counter.value)
// const dispatch = useDispatch()
