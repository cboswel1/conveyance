import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import VolunteerChart from "../../components/VolunteerTable/volunteerTable";
import UserService from "../../services/user.service";
import "./style.css"

const VolunteerPage = () => {

  const [content, setContent] = useState("");
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        // console.log(response.data);
        setContent(response.data);
        UserService.getVolunteers()
        .then(volunteerList => {
          setVolunteers(volunteerList.data);
        }).catch(error => console.log(error));
      },
      (error) => {
        // console.log(error);
        const errorString =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        const _content = {error: errorString, show: false}
        setContent(_content);
      }
    );
  }, []);

  useEffect(() => {
    console.log(`content: ${JSON.stringify(content)}`, `volunteers: ${JSON.stringify(volunteers)}`);
  }, [content, volunteers])

  return (
    <div className="dash-pad" >
      {
        content && (
          content.show ? (
            <MDBContainer className="vol-card">
              <VolunteerChart tableRows={volunteers}/>
            </MDBContainer>
          ) : (
            <h1>404 Page Not Found!</h1>
          )
        )
      }
    </div>
  );
};

export default VolunteerPage;