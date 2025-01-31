
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-black border border-white p-2 rounded-lg shadow-lg w-[70%] h-[60%] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};
export default Modal;