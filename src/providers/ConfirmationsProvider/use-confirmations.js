import { useContext } from "react";
import context from "./context";

const useConfirmations = () => useContext(context);
export default useConfirmations;
