import { createContext } from "react";

const context = createContext(async msg => window.confirm(msg.toString()));
export default context;
