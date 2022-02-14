import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function SnackDetails() {
  const [snack, setSnack] = useState([]);

  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [API, id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then((res) => {
        navigate("/snacks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { name, image, protein, fiber, added_sugar, is_healthy } = snack;
  return (
    <article>
      <aside>
        <h4>the snack health</h4>
        {<HeartHealth snackHealth={is_healthy} />}
      </aside>
      <div>
        <h5>{name}</h5>
        <img src={image} alt={name} />
        <h6>Protein: {protein}</h6>
        <h6>Fiber: {fiber}</h6>
        <h6>Added Sugar: {added_sugar}</h6>
      </div>
      <div className="showNavigation">
        <div>
          <Link to={"/snacks"}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
export default SnackDetails;
