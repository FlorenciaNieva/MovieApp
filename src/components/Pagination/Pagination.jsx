import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function Pagination({
  currentPage,
  totalPage,
  handlePageChange,
}) {
  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
      }}
      current={currentPage}
      total={totalPage}
      pageSize={20}
      onChange={handlePageChange}
    />
  );
}
