import React from "react";
import  { createPortal } from "react-dom";

class Modal extends React.Component {
    render() {
        const { isOpen, onClose, children } = this.props;
        if (!isOpen) return null;

        return createPortal(
            <div className="modal-overlay" onClick={onClose}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>

                    {children}
                </div>
            </div>,
            document.body
        );
    }
}

export default Modal;
