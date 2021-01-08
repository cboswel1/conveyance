import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';


const ProfilePage =  () => {
  return (
    <React.Fragment>
        <MDBRow className="justify-content-center">
        <MDBCol sm="12" md="6" lg="3" className="mb-5">
            <MDBCard>
                <MDBCardImage className="img-fluid" src={"https://free-profile-pics.com/profile-pictures/01232014/download/mr-bean-profile-picture-512x512.png"} />
                <MDBCardBody>
                    <MDBCardTitle className="text-center mb-2 font-bold">Mr. Bean</MDBCardTitle>
                    <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Coordinator</MDBCardTitle>
                    <MDBCardText>
                        <strong className="mb-2">About:</strong>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                    </MDBCardText>
                    <div className="row justify-content-end pr-1">
                        <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="9" className="pt-5">
        <section className="text-center pb-3">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde fugiat facere quaerat quibusdam et numquam, harum tempora excepturi, laudantium dolore officia assumenda, maxime ab. Consequatur non optio unde. Blanditiis!</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam amet quos blanditiis ipsa fuga natus aperiam laboriosam magni consequatur! Voluptatibus, error fuga doloribus ut maxime dolore accusantium sed quibusdam.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            
          </MDBRow>
        </section>
      </MDBCol>
    </MDBRow>
    </React.Fragment>
  );
}

export default ProfilePage;
