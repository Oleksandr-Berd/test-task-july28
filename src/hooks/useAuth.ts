import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsRefreshing,
  selectToken
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
    const token = useSelector(selectToken)

  return {
    isRefreshing,
    user,
    token,
  };
};
