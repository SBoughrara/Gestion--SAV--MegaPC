import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [data, setData] = useState({
    user_name: "",
    email: "",
    password: "12345",
    employeeId: null,
    clientId: null,
  });
  const navigate = useNavigate();

  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }
  function handleSubmit(e) {
    data.clientId = parseInt(data.clientId);
    data.employeeId = parseInt(data.employeeId);

    if (data.email == "" || data.user_name == "") {
      alert("saisir les donnee");
      e.preventDefault();
    } else {
      e.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: data,
      })
        .then(function (response) {
          console.log(response);
          navigate(-1);
        })
        .catch(function (error) {
          console.log(error);
          navigate(-1);
        });
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="pb-4">Ajouter un user</h2>
      <form className="border p-4 d-flex flex-column justify-content-center w-50">
        <div className="pb-4">
          <TextField
            className="w-100"
            name="user_name"
            label="user_name"
            variant="standard"
            onChange={handlechange}
            value={data.user_name}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="email"
            className="w-100"
            label="email"
            variant="standard"
            onChange={handlechange}
            value={data.email}
          />
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">user ...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={data.statut}
            label="user"
            name="user"
            // onChange={handlechange}
          >
            <MenuItem value={"ok"}>Client</MenuItem>
            <MenuItem value={"def"}>Employee</MenuItem>
          </Select>

        </FormControl>
        <div className="pb-4">
            <TextField
              name="clientId"
              className="w-100"
              label="clientId"
              variant="standard"
              onChange={handlechange}
              value={data.clientId}
            />
          </div>
          <div className="pb-4">
            <TextField
              name="employeeId"
              className="w-100"
              label="employeeId"
              variant="standard"
              onChange={handlechange}
              value={data.employeeId}
            />
          </div>
        <Button
          style={{ backgroundColor: "#b80000" }}
          onClick={handleSubmit}
          variant="contained"
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
}
