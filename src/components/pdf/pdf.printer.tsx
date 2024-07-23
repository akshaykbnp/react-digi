import React from 'react';

interface IPdfPrinterProps {
    file: ArrayBuffer
}

const PDFPrinter: React.FC<IPdfPrinterProps> = ({ file }) => {

    function _arrayBufferToBase64(buffer: ArrayBuffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    const print = () => {
        const pdfFrame = document.createElement('iframe');
        pdfFrame.style.visibility = 'hidden';
        pdfFrame.src = _arrayBufferToBase64(file);

        document.body.appendChild(pdfFrame);

        pdfFrame.contentWindow!.focus();
        pdfFrame.contentWindow!.print();

    };
    return (
        <i className="fas fa-print clickable" onClick={print} title="download" />
    );
};

export default PDFPrinter;
