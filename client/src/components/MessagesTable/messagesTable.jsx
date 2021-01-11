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
    rows: [
      {
        'id': 1,
        'title': 'Town Hall Meeting',
        'text': 'Blah Blah.',
        'dateSent': '01/10/2021'
      },
      {
        'id': 2,
        'title': 'Fundraiser',
        'text': 'Hello! Please donate some stuff.',
        'dateSent': '01/01/2021'
      },
      {
        'id': 3,
        'title': 'Awareness',
        'text': 'Hello! You need to be aware of this stuff.',
        'dateSent': '01/08/2021'
      }
    ]
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default MessageTable;
