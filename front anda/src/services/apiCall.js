import axios from "axios";


export const registerUser = async (user) =>{
    return await axios.post("http://localhost:8000/users", user);
}

export const loginUser = async () => {
    return await axios.get("http://localhost:8000/users");
}