import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    // if an image with 'png' or 'jpeg' format was selected
    if(selected && types.includes(selected.type)) {
      setFile(selected); // to store sellected image's data into our state
      setError(""); // to reset error message
    } else {
      setFile(null); // to reset the state
      setError("Please select an image file (png or jpeg)");
    }
  }
  return (
    <form>
      <input className="file-input" type="file" aria-label="Add image" onChange={changeHandler}/>
      <div className="output">
        { error && <div className="error">{ error }</div> }
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}
