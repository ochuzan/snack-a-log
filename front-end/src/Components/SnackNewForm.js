import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SnackNewForm(){
    const [ snack, setSnack ] = useState({
        name: "",
        image: "",
        protein: 0,
        fiber: 0,
        added_sugar: 0,
        is_healthy: false
    });

    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();



    return (
        <div>
            <form>
                <label></label>
                <input></input>
            </form>
        </div>
    )
}

export default SnackNewForm;