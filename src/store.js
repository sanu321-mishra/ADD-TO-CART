import {legacy_createStore} from "redux";
import rootred from "./redux/reducer/main";

const store = legacy_createStore(
    rootred
);

export default store