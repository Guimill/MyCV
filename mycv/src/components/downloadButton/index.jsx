export default function DownloadButton({downloadLink, diplomeName, size}) {

   return (
    <a class="downloadHandler" href={downloadLink} download>
     <button class="downloadHandler__downloadButton">
       {diplomeName}
     </button>
   </a>
   );
}