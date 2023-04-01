export default function DownloadButton({downloadLink, size}) {

   return (
    <a class="downloadHandler" href={downloadLink} download>
     <button class="downloadHandler__downloadButton">
       Diplome.pdf
     </button>
   </a>
   );
}