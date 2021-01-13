import React from "react";

import { MDBDataTable, MDBCard, MDBCardHeader, MDBIcon, MDBBtn } from "mdbreact";
import VolModal from "../../components/AddVolModal/VolModal";
const VolunteerTable = (props) => {

  const data = {
    columns: [
      {
        label: "First Name",
        field: "firstname",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Name",
        field: "lastname",
        sort: "asc",
        width: 270,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 150,
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
        width: 50,
      }
    ],
    rows: props.tableRows
  };

  return (
    <MDBCard>
      <MDBCardHeader
        tag="h3"
        className="text-center font-weight-bold text-uppercase py-4"
      >
       Volunteer Database <VolModal/>
      </MDBCardHeader>
      <MDBDataTable responsive striped bordered small data={data} />
    </MDBCard>
  );
};

export default VolunteerTable;
