import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const MessageTable = props => {
  const data = {
    columns: [
      // 
      {
        label: "Message",
        field: "heading0",
        minimal: 'lg',
        sort: "asc",
      },
      {
        label: "Date Sent",
        field: "heading1",
        minimal: 'sm',
        sort: "asc",
      },
      {
        label: "View",
        field: "heading2",
        minimal:'sm',
        sort: "asc",
      },
    ],
    rows: [
      {
        id: 1,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
      },
      {
        id: 2,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
      },
      {
        id: 3,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
      },
    ],
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default MessageTable;
