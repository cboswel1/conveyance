import React from "react";
import { MDBContainer } from "mdbreact";
import VolunteerChart from "../../components/VolunteerTable/volunteerTable";
import "./style.css"


const VolunteerPage = () => {

    return (
        <MDBContainer className="vol-card">
          <VolunteerChart />
        </MDBContainer>
      );
    };
    
    export default VolunteerPage;