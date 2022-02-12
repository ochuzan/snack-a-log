import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((e) => console(e));
  });
  return (
    <div className="Snacks">
      {snacks.map((snack) => (
        <article>
          <Link to={`/snacks/${snack.id}`}>
            <div className="snack">
              <img src={snack.image} alt={snack.name} />
              <span>
                <HeartHealth />
                <h4>{snack.name}</h4>
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Snacks;
