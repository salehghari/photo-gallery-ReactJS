import useFirestore from "../hooks/useFirestore";
import { useState } from "react";

export default function ImageGrid() {
  const { docs } = useFirestore("images");
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-grid">
      {docs && docs.map(doc => (
        <div className="image-wrap" key={doc.id}>
          {isLoaded ? null :
            <div className="image-loader"></div>
          }
          <img onLoad={() => setIsLoaded(true)} className="image" src={doc.url} alt={doc.imageName} style={ isLoaded ? { width: "100%" } : { display: "none" } } />
        </div>
      ))}
    </div>
  )
}