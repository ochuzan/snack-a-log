import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((e) => console(e));
  }, []);
  return (
    <div className="Snacks">
      {snacks.map((snack) => (
        <article key={snack.id}>
          <div className="Snack">
            <img src={snack.image} alt={snack.name} />
            <h4>
              <HeartHealth snackHealth={snack.is_healthy} />
              <Link to={`/snacks/${snack.id}`}>{snack.name} </Link>
            </h4>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Snacks;
