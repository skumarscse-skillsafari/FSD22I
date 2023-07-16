import { Col, ListGroup, Row, Image, Form, Button } from "react-bootstrap";
import { CartState } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[0]) * curr.qty,
        0
      )
    );
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.price}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.ratings}</span>
                </Col>
                <Col>
                  <Form.Select
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock)].map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize={20} />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal: {cart.length} items</span>
        <span>Total Rs. {total}</span>
        <Button type="button">Procced to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
