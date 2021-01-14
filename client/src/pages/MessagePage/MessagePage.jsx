
import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import ContactCard from "../../components/SendMessage/sendMessage";
import UserService from "../../services/user.service";
import "./style.css"

const MessagePage = () => {

  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        // console.log(response.data);
        setContent(response.data);
        // UserService.getVolunteers()
        //   .then(volunteerList => {
        //     setVolunteers(volunteerList.data);
        //   }).catch(error => console.log(error));
      },
      (error) => {
        // console.log(error);
        const errorString =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        const _content = { error: errorString, show: false }
        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="dash-pad" >
      {
        content && (
          content.show ? (
          <MDBContainer size="md" >
            <ContactCard />
          </MDBContainer>
          ) : (
              <h1>404 Page Not Found!</h1>
            )
        )
      }
    </div>
  );


  // return (
  //   <MDBContainer size="md" >
  //     <ContactCard />
  //   </MDBContainer>
  // );
};

export default MessagePage;