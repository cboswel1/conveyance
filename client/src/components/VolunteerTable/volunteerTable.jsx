import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Last" , "First", "Age", "Phone", "email", "City", "State"];

const data = [
  ["Vega", "Aurelia", 30, "235123465","cat@cat.com", "Spain", "Madrid"],
  ["Cortez", "Guerra", 45, "`12342145", "cat1@cat.com","USA", "San Francisco"],
  ["House", "Guadalupe", 26, "123456136","cat2@cat.com", "Germany", "Frankfurt am Main"],
  ["Gallagher", "Elisa", 31, "3564235645", "cat3@cat.com","United Kingdom", "London"]
];

const VolunteerTable = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Volunteer Roll Call
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default VolunteerTable;