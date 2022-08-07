import { useSelector } from "react-redux";

const useDetail = () => {
  const detail = useSelector((state) => state.detail);

  return detail;
};

export default useDetail;
