import { Button, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Ratings from "./Ratings";

const Filter = () => {
  const {
    productState: { byStock, byQuickDelivery, sort, byRating },
    productDispatch,
  } = CartState();
  return (
    <div className="filters">
      <span className="title">Filter Section</span>
      <span>
        <Form.Check
          inline
          label="Ascending Order (Price)"
          name="group1"
          type="radio"
          id={`inline-1`}
          checked={sort === "lowToHigh" ? true : false}
          onChange={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Decending Order (Price)"
          name="group2"
          type="radio"
          id={`inline-2`}
          checked={sort === "highToLow" ? true : false}
          onChange={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          checked={byStock}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Quick Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          checked={byQuickDelivery}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
        />
      </span>

      <span style={{ paddingRight: 10 }}>
        <label>Ratings: </label>
        <Ratings
          rating={byRating}
          onRating={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <Button
        variant="primary"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Filter;
