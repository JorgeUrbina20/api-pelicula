import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function Columna(prop) {
  return (
    <Col xs={12} sm={6} md={3} className="d-flex justify-content-center align-items-stretch mb-4">
      <Card style={{ width: '18rem', height: '100%' }}>
        <Card.Img 
          variant="top" 
          src={prop.img} 
          style={{ height: '27rem', objectFit: 'contain' }} // altura fija y recorte uniforme
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{prop.title}</Card.Title>
          <Card.Text className="flex-grow-1">
            {prop.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
