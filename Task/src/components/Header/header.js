
// import React from 'react'

// export default function header() {
//     return (
//         <div>

//             <nav class="navbar navbar-expand-lg body-tertiary bg-primary">
//                 <div class="container-fluid ">
//                     <a class="navbar-brand text-primary-emphasis"   href="#">Portfolio</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarText">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link text-light" href="#">MyProjects</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link text-light" href="#">About</a>
//                             </li>
//                         </ul>
//                         <span class="navbar-text text-light ">
// Contact Me                        </span>
//                     </div>
//                 </div>
//             </nav>

//         </div>
//     )
// }


/************************************************************************* */
/************************************************************************* */

import {Container,Navbar,NavDropdown,Nav}from 'react-bootstrap';

export default function header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-primary">
            <Container>
                <Navbar.Brand href="#home" >Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="nav-link active text-light">Home</Nav.Link>
                        <Nav.Link href="#pricing"className="nav-link active text-light">Contact</Nav.Link>
                        <NavDropdown className="text-light" title="MyProjects" id="collapsible-nav-dropdown ">
                            <NavDropdown.Item href="#action/3.1" >E-commerce</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


