import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
    selectIsError,
  selectToken
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
    const isError = useSelector(selectIsError);
    const token = useSelector(selectToken)

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,
    token,
  };
};
