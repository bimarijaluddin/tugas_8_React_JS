import React, {Component} from 'react';
import {Row, Col, Container, Nav, Dropdown, Figure, Breadcrumb, Carousel, ListGroup, Jumbotron, Button, Form} from 'react-bootstrap';

class App extends Component{
  render(){
    return(
      <Container>
        <Nav bg="dark" expand="lg" className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/home">
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Pilih Bahasa
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Indonesia</Dropdown.Item>
                  <Dropdown.Item href="#">Inggris</Dropdown.Item>
                  <Dropdown.Item href="#">Mandarin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <Figure className="justify-content-end">
                <Figure.Image width={64} height={64} src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" alt="profile" />
                <Figure.Caption>
                  Alan Saputra
                </Figure.Caption>
              </Figure>
          </Nav.Link>
        </Nav.Item>
        </Nav>
        <Row>
          <Col md={4}></Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active href="#">Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row> <br/>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Inggris Mau jadi Tim Terbaik Dunia</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Inggris Ingin Jadi Tim Terbaik Dunia</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> <br/>

        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item as="li"active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
              <ListGroup.Item as="li" disabled>Divisi Premiera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Liga 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
          <Jumbotron>
            <h1>Divisi Primera</h1>
            <p>
              Main untuk Catalunya, Gerrard Pique minta dihormati
            </p>
            <p>
              <Button variant="primary">Read more</Button>
            </p>
          </Jumbotron>
          </Col>
          <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Masukkan email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Term & Condition" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            </Form>
          </Col>
        </Row>
      </Container>      
    );
  }
}

export default App;
