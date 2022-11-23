import React from "react";
// import styles from "../styles/FilePreview.module.css";

const FilePreview = ({ fileData }) => {
  return (
    <div className="">
      <div className="">
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
            <>
              <ol>
                <li key={f.lastModified} className="">
                  {/* display the filename and type */}
                  <div key={f.name} className="">
                    {f.name}
                  </div>
                </li>
              </ol>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreview;
