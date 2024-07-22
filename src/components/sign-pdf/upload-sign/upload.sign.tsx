import React, { useState } from "react";
import { Button, Form, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import FontsData from "../../../data/fonts.data";
import "./upload.sign.scss";

export const UploadSign: React.FC = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState<string>("Signature");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFont, setSelectedFont] = useState<string>("");

  const [fonts, setFonts] = useState<string[]>(
    FontsData.map((data) => data.name)
  );

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  const handleAddSignature = () => {
    if (selectedFont === "") {
      console.log("select  a font ");
      return;
    }

    handleClose();

  }

  const handleLoadSavedSignature = () => {

  }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add your signature details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          id="inputSign"
          placeholder="Enter name"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="sign-formats">
          <ListGroup>
            <ListGroupItem className="text-center mb-2 d-flex border-0" onClick={handleLoadSavedSignature}>
              <Button className="load-sign-btn-group">Load saved signature</Button>
              <Button className="load-sign-btn-group">Upload</Button>
            </ListGroupItem>
          </ListGroup>
          <ListGroup>
            {fonts.map((font, index) => (
              <ListGroup.Item className="text-center d-flex align-items-center" key={index}>
                <Form.Check
                  inline
                  name="group"
                  type="radio"
                  onChange={() => handleFontChange(font)}
                />
                <p className="m-0" style={{ fontFamily: `"${font}", sans-serif` }}>{text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button className="primary-btn" onClick={handleAddSignature}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
