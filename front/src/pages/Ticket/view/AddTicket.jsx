import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTicket() {
  const [data, setData] = useState({
    modele: "",
    num_serie: "",
    type: "",
    statut: "",
    commentaire: "",
    garantie: "",
    clientId: 0,
  });
 const navigate=useNavigate();
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(typeof data.clientId);
    console.log(data);
  }
  function handleSubmit(e) {
    data.clientId = parseInt(data.clientId);
    if (
      data.modele == "" ||
      data.num_serie == "" ||
      data.type == "" ||
      data.statut == ""
    ) {
      alert("saisir les donnee");
    } else {
      e.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:3000/tickets",
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
      <h2 className="pb-4">Ajouter un Client</h2>
      <form className="border p-4 d-flex flex-column justify-content-center w-50">
        <div className="pb-4">
          <TextField
            className="w-100"
            name="modele"
            label="modele"
            variant="standard"
            onChange={handlechange}
            value={data.modele}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="num_serie"
            label="num_serie"
            className="w-100"
            variant="standard"
            onChange={handlechange}
            value={data.num_serie}
          />
        </div>
        <div className="pb-4">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">garentie</InputLabel>
            <Select
              name="garantie"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.garantie}
              label="garentie"
              onChange={handlechange}
            >
              <MenuItem value={"non_valider"}>non_valider</MenuItem>
              <MenuItem value={"valider"}>valider</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="pb-4">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">statut</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.statut}
              label="statut"
              name="statut"
              onChange={handlechange}
            >
              <MenuItem value={"ok"}>ok</MenuItem>
              <MenuItem value={"def"}>def</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="pb-4">
          <TextField
            name="type"
            className="w-100"
            label="type"
            onChange={handlechange}
            value={data.type}
            variant="standard"
          />
        </div>
        <div className="pb-4">
          <TextField
            onChange={handlechange}
            value={data.commentaire}
            name="commentaire"
            className="w-100"
            label="commentaire"
            variant="standard"
            inputProps={{
              style: {
                height: "90px",
              },
            }}
            multiline
            fullWidth
          />
        </div>
        <div className="pb-4">
          <TextField
            onChange={handlechange}
            type="number"
            value={data.clientId}
            name="clientId"
            className="w-100"
            label="clientId"
            variant="standard"
          />
        </div>
        <Button type="submit" onClick={handleSubmit} variant="contained">
          Envoyer
        </Button>
      </form>
    </div>
  );
}
