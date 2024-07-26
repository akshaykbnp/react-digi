import React, { useState } from "react";
import "./pdf.viewer.scss";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";
import PDFReader from "../../pdf/pdf";
import { Stack } from "react-bootstrap";


interface IPdfviewerProps {
  fileData: ArrayBuffer
}


export const PdfViewer: React.FC<IPdfviewerProps> = ({ fileData }) => {

  return (
    <div className="pdf-editor-wrapper d-flex">
        <PDFReader fileData={fileData}/>
      {/* pdf sign editor */}
      <Stack gap={3} className="signing-option-wrapper">
      <div className="p-2">Signing Options</div>
      <div className="p-2">
        <div className="signin">Signature here</div>
      </div>
      <div className="p-2">Third item</div>
    </Stack>
    </div>
  );
};
