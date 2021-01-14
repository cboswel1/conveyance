import React, { useState, useEffect } from "react";
import { Polar } from "react-chartjs-2";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";

import UserService from "../../services/user.service";

const DisplayChart = () => {

  // const [dataPolar, setDataPolar] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [labelsArray, setLabelsArray] = useState([]);

  useEffect(() => {

    UserService.getStats()
      .then(({ data }) => {
        console.log(data);
        setDataArray(data.map(stat => stat.total));
        setLabelsArray(data.map(stat => stat.status));
      }).catch(error => console.log(error));
  }, [])

  const dataPolar = () => {
    return {
      datasets: [
        {
          // data: [300, 50, 100, 40, 120],
          data: dataArray,
          backgroundColor: [
            "rgba(66, 245, 153, 0.5)",
            "rgba(70, 191, 189, 0.5)",
            "rgba(247, 70, 74, 0.5)",
            "rgba(253, 180, 92, 0.5)",
            "rgba(148, 159, 177, 0.5)",
            "rgba(245, 206, 66, 0.5)",
            "rgba(179, 66, 245, 0.5)",
            "rgba(66, 245, 245, 0.5)",
            "rgba(245, 161, 66, 0.5)",
          ],
          label: "My dataset", // for legend
        },
      ],
      // labels: ["Sent", "Accepted", "Received", "Failed"],
      labels: labelsArray,
    }
  }

  return (
    <MDBRow className="pb-3">
      <MDBCol md="6" className="pt-4">
        <MDBCard
          className="card-body"

        >
          <MDBCardTitle>Current User</MDBCardTitle>
          <MDBCardText>
            <h3>Non-MVP profile</h3>
            <br></br>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, nulla. Quia eaque, corrupti explicabo quibusdam cum quae cupiditate dolor assumenda, fugiat ullam harum!</p>
          </MDBCardText>

        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="pt-4">
        <Polar data={dataPolar()} options={{ responsive: true }} />
      </MDBCol>
    </MDBRow>
  );

}

export default DisplayChart;