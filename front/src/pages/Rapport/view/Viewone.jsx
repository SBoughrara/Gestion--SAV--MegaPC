import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Viewone({ id,show ,setShow}) {
  const handleClose = () => setShow(false);

  const [dataa, setDataa] = useState({
    id: 1,
    date: "2024-08-25T19:59:37.536Z",
    contenu: "Replaced the motherboard and tested.",
    ticketId: 1,
  });
  //   console.log(dataa, "thisssssssssss isssssssssssss rappppppppppppppporrrrrt");
  const get = async () => {
    axios
      .get(`http://localhost:3000/rapports/${+id}`)
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    get();
  }, [show]);

  console.log(dataa,"hohohohohohohohhohodsfsdfhvjsfhsvdh")
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <strong>rapport details</strong>
                <h6>rapport id</h6>
                <p>{dataa?.id}</p>
                <h6>rapport date</h6>
                <p>{dataa?.date}</p>
                <h6>rapport contenu</h6>
                <p>{dataa?.contenu}</p>
                <h6>Ticket model</h6>
                <p>{dataa?.Ticket?.modele}</p>
                <h6>Ticket commantaire</h6>
                <p>{dataa?.Ticket?.commentaire}</p>
                <h6>ticket garentie</h6>
                <p>{dataa?.Ticket?.garantie}</p>
                <h6>Client first name</h6>
                <p>{dataa?.Ticket?.Client?.first_name}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Viewone;
