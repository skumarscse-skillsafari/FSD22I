import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Config/firebase-config";

const EditRemainder = ({ editRemainder, id }) => {
  const [remainder, setRemainder] = useState([editRemainder]);

  const updateRemainder = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Are you sure to update the data?")) {
        const remainderRef = doc(db, "remainder", id);
        await updateDoc(remainderRef, {
          remainder: remainder,
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#edit-modal-${id}`}
      >
        EDIT
      </button>

      <div
        className="modal fade"
        id={`edit-modal-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT REMAINDER
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Edit Remainder"
                value={remainder}
                onChange={(e) => setRemainder(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => updateRemainder(e)}
              >
                Edit Remainder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRemainder;
