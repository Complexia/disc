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
            <Col>Directing - 3</Col>
            <Col>Influencing - 2</Col>
            <Col>Steady - 1</Col>
            <Col>Cautious - 2</Col>
            <Col><p className="rowTotal">Total - 8</p></Col>
          </Row>

          <Row>
            <Col>Row 2</Col>
            <Col>Self-Certain - 2</Col>
            <Col>Optimistic - 1</Col>
            <Col>Deliberate - 2</Col>
            <Col>Restrained - 2</Col>
            <Col><p className="rowTotal">Total - 7</p></Col>
          </Row>

          <Row>
            <Col>Row 3</Col>
            <Col>Adventurous - 1</Col>
            <Col>Enthusiastic - 1</Col>
            <Col>Predictable - 2</Col>
            <Col>Logical - 1</Col>
            <Col><p className="rowTotal">Total - 5</p></Col>
          </Row>

          <Row>
            <Col>Row 4</Col>
            <Col>Decisive - 1</Col>
            <Col>Open - 1</Col>
            <Col>Patient - 1</Col>
            <Col>Analytical - 1</Col>
            <Col><p className="rowTotal">Total - 4</p></Col>
          </Row>

          <Row>
            <Col>Row 5</Col>
            <Col>Daring - 2</Col>
            <Col>Impulsive - 4</Col>
            <Col>Stabilising - 2</Col>
            <Col>Precise - 1</Col>
            <Col><p className="rowTotal">Total - 9</p></Col>
          </Row>

          <Row>
            <Col>Row 6</Col>
            <Col>Restless - 4</Col>
            <Col>Emotional - 3</Col>
            <Col>Protective - 3</Col>
            <Col>Doubting - 2</Col>
            <Col><p className="rowTotal">Total - 12</p></Col>
          </Row>

          <Row>
            <Col>Row 7</Col>
            <Col>Competitive - 2</Col>
            <Col>Persuading - 2</Col>
            <Col>Accomodating - 1</Col>
            <Col>Curious - 1</Col>
            <Col><p className="rowTotal">Total - 6</p></Col>
          </Row>

          <Row>
            <Col>Row 8</Col>
            <Col>Assertive - 2</Col>
            <Col>Talkative - 2</Col>
            <Col>Modest - 1</Col>
            <Col>Tactful - 2</Col>
            <Col><p className="rowTotal">Total - 7</p></Col>
          </Row>

          <Row>
            <Col>Row 9</Col>
            <Col>Experimenting - 1</Col>
            <Col>Charming - 1</Col>
            <Col>Easy-going - 2</Col>
            <Col>Consistent - 1</Col>
            <Col><p className="rowTotal">Total - 5</p></Col>
          </Row>

          <Row>
            <Col>Row 10</Col>
            <Col>Forceful - 4</Col>
            <Col>Sensitive - 3</Col>
            <Col>Sincere - 1</Col>
            <Col>Perfectionist - 2</Col>
            <Col><p className="rowTotal">Total - 10</p></Col>
          </Row>

          <div className="totalScore">Total score = 73</div>

          
        </Container>



        <Container fluid="md">
          <div className="totalScore">Home setting</div>
          <Row>
            <Col>Row 1</Col>
            <Col>Directing - 3</Col>
            <Col>Influencing - 1</Col>
            <Col>Steady - 1</Col>
            <Col>Cautious - 2</Col>
            <Col><p className="rowTotal">Total - 7</p></Col>
          </Row>

          <Row>
            <Col>Row 2</Col>
            <Col>Self-Certain - 2</Col>
            <Col>Optimistic - 1</Col>
            <Col>Deliberate - 2</Col>
            <Col>Restrained - 4</Col>
            <Col><p className="rowTotal">Total - 9</p></Col>
          </Row>

          <Row>
            <Col>Row 3</Col>
            <Col>Adventurous - 1</Col>
            <Col>Enthusiastic - 1</Col>
            <Col>Predictable - 3</Col>
            <Col>Logical - 2</Col>
            <Col><p className="rowTotal">Total - 7</p></Col>
          </Row>

          <Row>
            <Col>Row 4</Col>
            <Col>Decisive - 1</Col>
            <Col>Open - 1</Col>
            <Col>Patient - 1</Col>
            <Col>Analytical - 2</Col>
            <Col><p className="rowTotal">Total - 5</p></Col>
          </Row>

          <Row>
            <Col>Row 5</Col>
            <Col>Daring - 1</Col>
            <Col>Impulsive - 4</Col>
            <Col>Stabilising - 1</Col>
            <Col>Precise - 2</Col>
            <Col><p className="rowTotal">Total - 7</p></Col>
          </Row>

          <Row>
            <Col>Row 6</Col>
            <Col>Restless - 4</Col>
            <Col>Emotional - 3</Col>
            <Col>Protective - 2</Col>
            <Col>Doubting - 4</Col>
            <Col><p className="rowTotal">Total - 13</p></Col>
          </Row>

          <Row>
            <Col>Row 7</Col>
            <Col>Competitive - 4</Col>
            <Col>Persuading - 2</Col>
            <Col>Accomodating - 1</Col>
            <Col>Curious - 1</Col>
            <Col><p className="rowTotal">Total - 8</p></Col>
          </Row>

          <Row>
            <Col>Row 8</Col>
            <Col>Assertive - 2</Col>
            <Col>Talkative - 1</Col>
            <Col>Modest - 1</Col>
            <Col>Tactful - 2</Col>
            <Col><p className="rowTotal">Total - 6</p></Col>
          </Row>

          <Row>
            <Col>Row 9</Col>
            <Col>Experimenting - 1</Col>
            <Col>Charming - 1</Col>
            <Col>Easy-going - 1</Col>
            <Col>Consistent - 1</Col>
            <Col><p className="rowTotal">Total - 4</p></Col>
          </Row>

          <Row>
            <Col>Row 10</Col>
            <Col>Forceful - 4</Col>
            <Col>Sensitive - 3</Col>
            <Col>Sincere - 1</Col>
            <Col>Perfectionist - 4</Col>
            <Col><p className="rowTotal">Total - 12</p></Col>
          </Row>

          <div className="totalScore">Total score = 78</div>

          
        </Container>

      </header>
    </div>
  );
}

export default App;
