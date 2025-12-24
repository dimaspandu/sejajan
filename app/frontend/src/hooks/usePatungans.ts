import { useCallback, useEffect, useReducer } from "react";
import { fetchPatungans } from "../api/patungan";
import { type Patungan } from "../types/patungan";

type State = {
  data: Patungan[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Patungan[] }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { data: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
}

export function usePatungans() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const load = useCallback(async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await fetchPatungans();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload:
          err instanceof Error ? err.message : "Failed to load patungans",
      });
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    patungans: state.data,
    loading: state.loading,
    error: state.error,
    reload: load,
  };
}
