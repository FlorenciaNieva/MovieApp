import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function BottomPagination({
  page,
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
        marginBottom: "50px",
      }}
      current={currentPage}
      total={totalPage}
      pageSize={20}
      onChange={onChange}
    />
  );
}
