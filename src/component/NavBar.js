import React from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const NavBar = () => {
  return (
    
      

        <><nav class="navbar navbar-expand-sm navbar-dark  fixed-top">
      <div class="container-fluid">
        <img src="https://image1.jdomni.in/storeLogo/12082021/3B/2D/E0/A1EE351C97DE7D186F862167D6_1628770076813.png?output-format=webp" className='op' />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarNav">
          <Container>
            <Row>
              <Col xs={6} md={2}>
              </Col>
              <Col xs={6} md={8} className='ui'>
                <ul class="navbar-nav">
                  <li class="nav-item">
                   <a class="nav-link active o" aria-current="page" href="#">HOME   </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active o" href="#">ABOUT US    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active o" href="#">WHY US   </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active o" href="#">CONTACT US   </a>
                  </li>

                  <li class="nav-item df">


                  <a class="nav-link active o" href="#">Log In</a>
                  </li>
                  <li class="nav-item df">
                    <a class="nav-link active o" href="#">|</a>
                  </li>
                  <li class="nav-item df">
                    <a class="nav-link active o" href="#">Sign Up</a>
                  </li>

                </ul>
              </Col>
              <Col xs={6} md={2}>

              </Col>
            </Row>
          </Container>

        </div>
      </div>
    </nav></>
    
  )
}


