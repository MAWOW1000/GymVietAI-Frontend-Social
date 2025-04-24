import { useRef, useEffect } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoBan } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import { AiFillCopy } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { privateAxios } from "../../../api/client";

const DropdownMenu = ({
  menuOpen,
  setMenuOpen,
  buttonRef,
  isOwner,
  postId,
  onDelete,
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuOpen, buttonRef]);

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      try {
        const response = await privateAxios.delete(`/posts/${postId}`);
        if (response.status === 200 || response.status === 204) {
          onDelete(postId);
          setMenuOpen(false);
          alert("Xóa bài viết thành công!");
        } else {
          alert("Xóa bài viết thất bại!");
        }
      } catch (error) {
        console.error("Delete error:", error.response?.data || error.message);
        alert("Có lỗi xảy ra khi xóa bài viết!");
      }
    }
  };

  return (
    <>
      <div
        className={`dropdown-overlay ${menuOpen ? "active" : ""}`}
        onClick={(e) => {
          console.log("Overlay clicked");
          setMenuOpen(false);
        }}
      ></div>

      {menuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          {isOwner && (
            <div className="group">
              <p
                onClick={(e) => {
                  // console.log("Delete button clicked for postId:", postId);
                  handleDelete(e);
                }}
              >
                Xóa bài viết <FaTrash />
              </p>
            </div>
          )}
          <div className="group">
            <p onClick={(e) => console.log("Lưu clicked")}>
              Lưu <CiSaveDown2 />
            </p>
            <p onClick={(e) => console.log("Không quan tâm clicked")}>
              Không quan tâm <FaEyeSlash />
            </p>
          </div>
          <div className="group">
            <p onClick={(e) => console.log("Tắt thông báo clicked")}>
              Tắt thông báo <GiNightSleep />
            </p>
            <p onClick={(e) => console.log("Chặn clicked")}>
              Chặn <IoBan />
            </p>
            <p onClick={(e) => console.log("Báo cáo clicked")}>
              Báo cáo <MdReportProblem />
            </p>
          </div>
          <div className="group">
            <p onClick={(e) => console.log("Sao chép liên kết clicked")}>
              Sao chép liên kết <AiFillCopy />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
