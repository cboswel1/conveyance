import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const MessageTable = (props) => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc'
      },
      {
        label: 'Message',
        field: 'message',
        sort: 'asc'
      },
      {
        label: 'Date Sent',
        field: 'dateSent',
        sort: 'asc'
      },
      // {
      //   label: 'Sent Count',
      //   field: 'sent',
      //   sort: 'asc'
      // }
    ],
    rows: [
      {
        'id': 1,
        'title': 'Town Hall Meeting',
        'message': 'Hello! Meet as @ the town hall to talk about stuff.',
        'Date Sent': '01/10/2021',
        // 'sent': '25'
      },
      {
        'id': 2,
        'title': 'Fundraiser',
        'message': 'Hello! Please donate some stuff.',
        'Date Sent': '01/01/2021',
        // 'sent': '50'
      },
      {
        'id': 3,
        'title': 'Awareness',
        'message': 'Hello! You need to be aware of this stuff.',
        'Date Sent': '01/08/2021',
        // 'sent': '150'
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
