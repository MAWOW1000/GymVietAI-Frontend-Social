import { useRef, useEffect } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoBan } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import { AiFillCopy } from "react-icons/ai";

const DropdownMenu = ({ menuOpen, setMenuOpen, buttonRef }) => {
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

  return (
    <>
      <div
        className={`dropdown-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {menuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <div className="group">
            <p>
              Lưu <CiSaveDown2 />
            </p>
            <p>
              Không quan tâm <FaEyeSlash />
            </p>
          </div>
          <div className="group">
            <p>
              Tắt thông báo <GiNightSleep />
            </p>
            <p>
              Chặn <IoBan />
            </p>
            <p>
              Báo cáo <MdReportProblem />
            </p>
          </div>
          <div className="group">
            <p>
              Sao chép liên kết <AiFillCopy />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
