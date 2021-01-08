import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';

export default function MessageTable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Message',
        field: 'name',
        width: 500,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
     
      {
        label: 'Date Sent',
        field: 'date',
        width: 300,
      },
      {
        label: 'View',
        field: 'age',
        sort: 'asc',
        width: 100,
      }
     
    ],
    rows: [
      {
        name: 'Party at my man Craigs House',
        position: 'System Architect',
        office: 'Edinburgh',
        age: <MDBBtn color="black" size="sm">Button</MDBBtn>,
        date: '2011/04/25',
        salary: '$320',
      },
      {
        name: 'Meet at the Food Bank',
        position: 'Accountant',
        office: 'Tokyo',
        age: <MDBBtn color="black" size="sm">Button</MDBBtn>,
        date: '2011/07/25',
        salary: '$170',
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: <MDBBtn color="black" size="sm">Button</MDBBtn>,
        date: '2009/01/12',
        salary: '$86',
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: <MDBBtn color="black" size="sm">Button</MDBBtn>,
        date: '2012/03/29',
        salary: '$433',
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: <MDBBtn color="black" size="sm">Button</MDBBtn>,
        date: '2008/11/28',
        salary: '$162',
      },
      
    ],
  });

  return <MDBDataTableV5 className="pt-5" hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} proSelect />;
}