import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Client() {
  const columns = [
    {
      field: "photo",
      headerName: "photo",
      sortable: false,

      renderCell: (params) => {
        return <Avatar src={params.row.photo} />;
      },
      width: 50,
    },
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "first_name",
      headerName: "First name",
      width: 150,
      
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "adresse",
      headerName: "adresse",
      width: 200,
    },
    {
      field: "numero",
      headerName: "numero",
      width: 160,
    },
  ];

  const [dataa, setDataa] = useState();
  const get = async () => {
    axios
      .get("http://localhost:3000/clients")
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    get();
  }, []);

  console.log(dataa);
  return (
    <div>
      <div className="d-flex justify-content-between pb-4">
        <h2 className="p-3">List des Clients</h2>
        <Link to={"add"}>
          <Button variant="contained" style={{ backgroundColor: "#8B0000" }} >Ajouter un Client</Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={dataa} columns={columns} />
      </div>
    </div>
  );
}

export default Client;
