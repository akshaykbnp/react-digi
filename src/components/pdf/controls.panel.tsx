import React from 'react';
import PDFPrinter from './pdf.printer';
import { FaStepForward , FaStepBackward , FaFastForward, FaFastBackward} from "react-icons/fa";
import { AiOutlineZoomOut , AiOutlineZoomIn } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";


interface IControlPanelProps {
    file : ArrayBuffer, 
    pageNumber:  number, 
    numPages : number, 
    setPageNumber : (num : number) => void, 
    scale : number, 
    setScale : (num : number) => void
}

const ControlPanel : React.FC<IControlPanelProps> = ({file, pageNumber, numPages, setPageNumber, scale, setScale}) => {

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e : any) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="control-panel m-3 py-3 d-flex align-items-baseline justify-content-between" style={{background : "#eee"}}>
      <div className="d-flex justify-content-between align-items-baseline">
          <FaFastBackward className={`fas fa-fast-backward mx-3 ${firstPageClass}`} onClick={goToFirstPage}/>
          <FaStepBackward className={`fas fa-backward mx-3 ${firstPageClass}`} onClick={goToPreviousPage}/>
        <span>
          Page{' '}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{' '}
          of {numPages}
        </span>
          <FaStepForward className={`fas fa-forward mx-3 ${lastPageClass}`}  onClick={goToNextPage}/>
          <FaFastForward className={`fas fa-fast-forward mx-3 ${lastPageClass}`} onClick={goToLastPage}/>
      </div>
      <div className="d-flex justify-content-between align-items-baseline">
      <AiOutlineZoomOut  className={`fas fa-search-minus mx-3 ${zoomOutClass}`} onClick={zoomOut}/>
      <span>{(scale * 100).toFixed()}%</span>
      <AiOutlineZoomIn className={`fas fa-search-plus mx-3 ${zoomInClass}`} onClick={zoomIn}/>
       
      </div>
      {/*  href="/assets/docs/file-sample.pdf" */}
      <div className="mx-3">
        <a title="download" download={true}><IoMdDownload className="fas fa-file-download clickable"/></a>
      </div>
      <div className="mx-3">
        <PDFPrinter file={file} />
      </div>
    </div>
  );
};

export default ControlPanel;
