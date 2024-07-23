import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './controls.panel';
import Loader from './loader';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


// https://codesandbox.io/s/pdf-reader-y457i?file=/src/App.css

interface IPdfReaderProps {
    fileData: ArrayBuffer
  }

const PDFReader :  React.FC<IPdfReaderProps> = ({fileData}) => {

  const [scale, setScale] = useState<number>(1.0);
  const [numPages, setNumPages] = useState<number>(1);   //null initially
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setIsLoading(false);
  }


  return (
    <div>
      {isLoading && <Loader  />}
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={fileData}
        />
        <Document
          file={fileData}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
