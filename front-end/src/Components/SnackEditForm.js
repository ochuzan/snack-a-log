import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
      <label htmlFor="name">Name</label>
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
      <input type="submit" />
    </form>
  );
}

export default SnackEditForm;
