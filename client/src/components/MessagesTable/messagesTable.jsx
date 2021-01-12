import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const MessageTable = (props) => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
      },
      {
        label: 'Title',
        field: 'title',
      },
      {
        label: 'Text',
        field: 'text',
      },
      {
        label: 'Date Sent',
        field: 'dateSent',
        sort: 'desc'
      }
    ],
    rows: props.tableRows
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default MessageTable;
