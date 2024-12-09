import { useCallback } from "react";
import debounce from "lodash.debounce";

const useDebounce = (callback, delay) => {
  return useCallback(debounce(callback, delay), [callback, delay]);
};

export default useDebounce;