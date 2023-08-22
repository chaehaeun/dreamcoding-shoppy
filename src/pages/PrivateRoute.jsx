import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const PrivateRoute = ({ children, requireAdmin }) => {
  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야 함
  // 조건에 맞지 않으면 / 상위 경로로 이동
  // 조건에 맞으면 children을 렌더링

  const { user } = useAuth();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
