import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editticket() {
  const { id } = useParams();

  const [data, setData] = useState();
  //   const { password, ...rest } = data;

  function handle(e) {
    const { name, value } = e.target;
    if (name === "status") {
      setData((prev) => ({ ...prev, status: value }));
    } else {
      setData({ ...data, [name]: value });
    }

    console.log(data, "ddddddddddddddddddddddd");
  }
  const navigate = useNavigate();
  const get = async () => {
    axios
      .get(`http://localhost:3000/tickets/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    get();
    console.log(data, "dataaa haaa hajj");
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    const { id, ...resr } = data;
    const { clientId, ...resrrr } = resr;
    const { Client, ...haya } = resrrr;

    axios({
      method: "patch",
      url: `http://localhost:3000/tickets/${id}`,
      data: haya,
    })
      .then(function (response) {
        console.log(response);
        navigate(-1);
      })
      .catch(function (error) {
        console.log(error);
        //   navigate(-1);
      });
    // navigate(-1);
  };
  return (
    <>
      <div className="d-flex gap-20">
        <form onSubmit={handleEdit} className=" col-5">
          <div className="pb-3">
            <p className="mb-2">modele</p>
            <TextField
              fullWidth={true}
              name="modele"
              onChange={handle}
              value={data?.modele}
              required
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">num_serie</p>
            <TextField
              fullWidth={true}
              name="num_serie"
              onChange={handle}
              value={data?.num_serie}
              required
            />
          </div>
          <div className="pb-3">
            <p className="mb-2">garantie :</p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">garantie :</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data?.garantie}
                name="garantie"
                onChange={handle}
              >
                <MenuItem value={"valider"}>valider</MenuItem>
                <MenuItem value={"non_valider"}>non valider</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="pb-3">
            <p className="mb-2">Status</p>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data?.status}
                name="status"
                onChange={handle}
              >
                <MenuItem value={"reception"}>reception</MenuItem>
                <MenuItem value={"encours"}>encours</MenuItem>
                <MenuItem value={"terminer"}>terminer</MenuItem>
                <MenuItem value={"annuler"}>annuler</MenuItem>
                <MenuItem value={"fournisseur"}>fournisseur</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button type="submit"> OK </Button>
        </form>
      </div>
    </>
  );
}

export default Editticket;
