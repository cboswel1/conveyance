import React, {useEffect, useState} from "react";
import  { Redirect } from 'react-router-dom';
import ResponseChart from "../../components/ResponseBarChart/responseBarChart";
import MessageTable from "../../components/MessagesTable/messagesTable";
import UserService from "../../services/user.service";

const DashboardPage = () => {

  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        // console.log(response.data);
        setContent(response.data);
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
    console.log(content);
  }, [content])

  return (
    <div>
      {
        content.show ? (
          <ResponseChart />
        ) : (
          <h1>404 Page Not Found!</h1>
        )
      }

      <ResponseChart />
      <MessageTable />

    </div>
  );
};

export default withRouter(DashboardPage);
