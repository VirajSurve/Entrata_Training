import React from "react";
import "./DeletePop.css";

function DeletePop({ itemId, onClose, onRemove }) {
  return (
    <div className="model-btn">
      <div className="flex-box ">
        <p className="text-xl font-semibold">Delete this wishlist?</p>
        <p className="text-gray-600">
          This hotel will be <br />
          permanently deleted.
        </p>
      </div>
      <hr />
      <div className="flex justify-around items-end mt-3">
        <div>
          <button className="no-btn font-semibold" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="yes-btn font-semibold">
          <button onClick={() => onRemove(itemId)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePop;
