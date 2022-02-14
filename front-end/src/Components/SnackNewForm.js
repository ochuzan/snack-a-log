import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SnackNewForm() {
  const [snack, setSnack] = useState({
    name: "",
    image: "",
    protein: 0,
    fiber: 0,
    added_sugar: 0,
  });

  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/snacks`, snack)
      .then((res) => {
        navigate("/snacks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          value={snack.name}
          onChange={handleChange}
          required
        />
        <hr />
        <label htmlFor="image">Image</label>
        <br />
        <input
          type="text"
          id="image"
          value={snack.image}
          onChange={handleChange}
          placeholder="https://"
        />
        <hr />
        <label htmlFor="protein">Protein</label>
        <br />
        <input
          type="number"
          id="protein"
          value={snack.protein}
          onChange={handleChange}
        />
        <hr />
        <label htmlFor="fiber">Fiber</label>
        <br />
        <input
          type="number"
          id="fiber"
          value={snack.fiber}
          onChange={handleChange}
        />
        <hr />
        <label htmlFor="added_sugar">Added Sugar</label>
        <br />
        <input
          type="number"
          id="added_sugar"
          value={snack.added_sugar}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm;
