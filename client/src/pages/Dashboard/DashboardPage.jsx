import React, {useEffect, useState} from "react";
import ResponseChart from "../../components/ResponseBarChart/responseBarChart";
import MessageTable from "../../components/MessagesTable/messagesTable";
import UserService from "../../services/user.service";
import "./style.css";
import { MDBContainer } from "mdbreact";
import axios from "axios";

const DashboardPage = () => {

  const [content, setContent] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  ///***REMEMBER TO LOCK DOWN THIS ROUTE WITH JWT IN REQUEST HEADER. REFER TO UserService.getUserBoard()!!!! */
  const getCampaigns = async () => {
    return await axios.get("/api/twilio/campaigns");
  
  }

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        // console.log(response.data);
        setContent(response.data);
        getCampaigns()
        .then(campaignList => {
          setCampaigns(campaignList.data);
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
    console.log(`content: ${JSON.stringify(content)}`, `campaigns: ${JSON.stringify(campaigns)}`);
  }, [content, campaigns])

  return (
    <div className="dash-pad" >
      {
        content && (
          content.show ? (
            <MDBContainer fluid>
              <ResponseChart />
              <MessageTable tableRows={campaigns}/>
              
            </MDBContainer>
          ) : (
            <h1>404 Page Not Found!</h1>
          )
        )
      }
    </div>
  );
};

export default DashboardPage;
