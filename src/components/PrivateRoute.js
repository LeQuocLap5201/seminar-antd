import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({ index, element, path }) {
  return process.env.REACT_APP_IS_SEMINAR === "true" ? (
    <Route index path={path} element={element} />
  ) : (
    <Navigate to="/404" />
  );
}
