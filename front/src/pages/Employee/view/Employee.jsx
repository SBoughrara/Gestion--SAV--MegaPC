import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Employee() {

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
    {
      field: "role",
      headerName: "role",
      width: 160,
    },
  ];
  const [dataa, setDataa] = React.useState();
  const get = async () => {
    axios
      .get("http://localhost:3000/employees")
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

  return (
    <div>
      <div className="d-flex justify-content-between pb-4">
        <h2 className="p-3">List des Employees</h2>
        <Link to={"add"}>
          <Button
           style={{backgroundColor:"#8b0000"}}
           variant="contained">Ajouter un Employee</Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={dataa} columns={columns} />
      </div>
    </div>
  );
}

export default Employee;
