import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CVContent from './index.mdx';

function CV() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="page-content">
          <CVContent />
        </div>
      </Row>
    </Container>
  );
}

export default CV;
