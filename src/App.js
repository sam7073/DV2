import './App.css';
import Card from './components/Card';
import Button from './components/Buttons';

import Dv1 from './Routes/Dv1';
import Dv2 from './Routes/Dv2';
import Result from './Routes/Result';

import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter basename="/DV2">
          <Card width="200px" height="600px" fd="column">
            <Link to="/dv1">
              <Button primary>시각화 1</Button>
            </Link>
            <Link to="/dv2">
              <Button primary>시각화 2</Button>
            </Link>
            <Link to="/result">
              <Button primary>결론</Button>
            </Link>
          </Card>
          <Card width="600px" height="600px" margin_left="50px">
            <Switch>
              <Route path="/dv1" exact component={Dv1} />
              <Route path="/dv2" component={Dv2} />
              <Route path="/result" component={Result} />
            </Switch>
          </Card>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
