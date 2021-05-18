import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid="md">
          <div className="totalScore">Work setting</div>
          <Row>
            <Col>Row 1</Col>
            <Col>Directing - 1</Col>
            <Col>Influencing - 4</Col>
            <Col>Steady - 3</Col>
            <Col>Cautious - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 2</Col>
            <Col>Self-Certain - 2</Col>
            <Col>Optimistic - 4</Col>
            <Col>Deliberate - 3</Col>
            <Col>Restrained - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 3</Col>
            <Col>Adventurous - 4</Col>
            <Col>Enthusiastic - 3</Col>
            <Col>Predictable - 1</Col>
            <Col>Logical - 2</Col>
            <Col><p className="rowTotal">Total - 5</p></Col>
          </Row>

          <Row>
            <Col>Row 4</Col>
            <Col>Decisive - 4</Col>
            <Col>Open - 3</Col>
            <Col>Patient - 2</Col>
            <Col>Analytical - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 5</Col>
            <Col>Daring - 2</Col>
            <Col>Impulsive - 1</Col>
            <Col>Stabilising - 3</Col>
            <Col>Precise - 4</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 6</Col>
            <Col>Restless - 4</Col>
            <Col>Emotional - 2</Col>
            <Col>Protective - 3</Col>
            <Col>Doubting - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 7</Col>
            <Col>Competitive - 1</Col>
            <Col>Persuading - 3</Col>
            <Col>Accomodating - 2</Col>
            <Col>Curious - 4</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 8</Col>
            <Col>Assertive - 4</Col>
            <Col>Talkative - 2</Col>
            <Col>Modest - 3</Col>
            <Col>Tactful - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 9</Col>
            <Col>Experimenting - 4</Col>
            <Col>Charming - 3</Col>
            <Col>Easy-going - 1</Col>
            <Col>Consistent - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 10</Col>
            <Col>Forceful - 1</Col>
            <Col>Sensitive - 3</Col>
            <Col>Sincere - 4</Col>
            <Col>Perfectionist - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <div className="totalScore">Total score = 100</div>

          
        </Container>



        <Container fluid="md">
          <div className="totalScore">Home setting</div>
          <Row>
            <Col>Row 1</Col>
            <Col>Directing - 1</Col>
            <Col>Influencing - 3</Col>
            <Col>Steady - 4</Col>
            <Col>Cautious - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 2</Col>
            <Col>Self-Certain - 3</Col>
            <Col>Optimistic - 4</Col>
            <Col>Deliberate - 2</Col>
            <Col>Restrained - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 3</Col>
            <Col>Adventurous - 4</Col>
            <Col>Enthusiastic - 3</Col>
            <Col>Predictable - 1</Col>
            <Col>Logical - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 4</Col>
            <Col>Decisive - 2</Col>
            <Col>Open - 4</Col>
            <Col>Patient - 3</Col>
            <Col>Analytical - 1</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 5</Col>
            <Col>Daring - 3</Col>
            <Col>Impulsive - 1</Col>
            <Col>Stabilising - 4</Col>
            <Col>Precise - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 6</Col>
            <Col>Restless - 1</Col>
            <Col>Emotional - 3</Col>
            <Col>Protective - 4</Col>
            <Col>Doubting - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 7</Col>
            <Col>Competitive - 1</Col>
            <Col>Persuading - 2</Col>
            <Col>Accomodating - 3</Col>
            <Col>Curious - 4</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 8</Col>
            <Col>Assertive - 1</Col>
            <Col>Talkative - 4</Col>
            <Col>Modest - 3</Col>
            <Col>Tactful - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 9</Col>
            <Col>Experimenting - 1</Col>
            <Col>Charming - 3</Col>
            <Col>Easy-going - 4</Col>
            <Col>Consistent - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <Row>
            <Col>Row 10</Col>
            <Col>Forceful - 1</Col>
            <Col>Sensitive - 3</Col>
            <Col>Sincere - 4</Col>
            <Col>Perfectionist - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <div className="totalScore">Total score = 100</div>

          
        </Container>

      </header>
    </div>
  );
}

export default App;
