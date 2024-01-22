import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function Pagination({
  page,
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
      onChange={() => handlePageChange(page + 1)}
    />
  );
}
