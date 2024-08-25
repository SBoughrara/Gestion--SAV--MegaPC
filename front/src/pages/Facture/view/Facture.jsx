import * as React from "react";
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

function Facture() {

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
    <Container>
      <h1>Facture : </h1>
      <InvoiceForm/>
    </Container>
  </div>
  );
}

export default Facture;
