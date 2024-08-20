import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function User() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div>
      <div className="d-flex justify-content-between pb-4">

        <h2 className="p-3">List des Users</h2>
<Link to={"add"}>
        <Button >Ajouter un User</Button>
</Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          {...data}
          loading={loading}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
}

export default User;
