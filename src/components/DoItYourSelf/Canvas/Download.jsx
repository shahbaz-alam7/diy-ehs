import React from 'react'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Download = ({pageRef}) => {
  const printDocumentPDF = () => {
    html2canvas(pageRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 30, 25);
      pdf.save("download.pdf");
    });
  };
  return (
    <div style={{top:"80vh",left:"80vw",background:"green",border:"green 1px solid", position :"absolute"}}>
      <button style={{fontSize:"30px"}} onClick={()=>{console.log("clicked");printDocumentPDF()}}>
        Download
      </button>
    </div>
  )
}

export default Download;
