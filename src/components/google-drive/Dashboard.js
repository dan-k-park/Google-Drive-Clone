import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import { useFolder } from "../hooks/useFolder";
import { useLocation, useParams } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import AddFileButton from "./AddFileButton";

const Dashboard = () => {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId, state.folder);
  console.log(childFolders);
  return (
    <>
      <Header />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
