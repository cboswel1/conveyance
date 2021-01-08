import React from "react";
import { Polar } from "react-chartjs-2";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

class DisplayChart extends React.Component {
  state = {
    dataPolar: {
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "rgba(247, 70, 74, 0.5)",
            "rgba(70, 191, 189, 0.5)",
            "rgba(253, 180, 92, 0.5)",
            "rgba(148, 159, 177, 0.5)",
            "rgba(77, 83, 96, 0.5)",
          ],
          label: "My dataset", // for legend
        },
      ],
      labels: ["Sent", "Accepted", "Received", "Failed"],
    },
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard
              className="card-body"
              style={{ width: "22rem", marginTop: "1rem" }}
            >
              <MDBCardTitle>Current User</MDBCardTitle>
              <MDBCardText>
                <p>Non-MVP profile</p>
               
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nulla. Quia eaque, corrupti explicabo quibusdam cum quae cupiditate dolor assumenda, fugiat ullam harum! 
              </MDBCardText>
              
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <Polar data={this.state.dataPolar} options={{ responsive: true }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DisplayChart;
