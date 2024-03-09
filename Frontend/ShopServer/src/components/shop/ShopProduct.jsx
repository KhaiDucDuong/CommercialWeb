import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShopProduct(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.products.imagePath} />
      <Card.Body>
        <Card.Title>{props.products.name}</Card.Title>
        <Card.Text>
        {props.products.discription}
        </Card.Text>
        <Card.Text>
        Price: {props.products.price}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopProduct;