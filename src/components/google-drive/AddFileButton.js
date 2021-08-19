import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddFileButton = ({ currentFolder }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;
  };
  return (
    <label className="btn btn-outline success btn-sm m-0 mr-2">
      <FontAwesomeIcon icon={faFileUpload} />
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: "absolute", left: "-999999px" }}
      />
    </label>
  );
};

export default AddFileButton;
