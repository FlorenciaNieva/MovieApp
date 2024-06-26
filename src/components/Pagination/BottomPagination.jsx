import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

export default function BottomPagination({
  currentPage,
  totalPage,
  handlePageChange,
}) {
  const onChange = (newPage) => {
    handlePageChange(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
      }}
      current={currentPage}
      total={totalPage}
      pageSize={20}
      onChange={onChange}
      prevIcon={<TbPlayerTrackPrevFilled />}
      nextIcon={<TbPlayerTrackNextFilled />}
    />
  );
}
