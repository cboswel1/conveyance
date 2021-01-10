
import { MDBContainer } from "mdbreact";
import React from "react";
import ContactCard from "../../components/SendMessage/sendMessage";
import "./style.css"


const MessagePage = () => {

    return (
        <MDBContainer className="message-card" size="md">
          <ContactCard />
        </MDBContainer>
      );
    };
    
    export default MessagePage;