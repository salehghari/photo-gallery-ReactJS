import useFirestore from "../hooks/useFirestore";

export default function ImageGrid() {
  const { docs } = useFirestore("images");
  
  return (
    <div className="image-grid">
      {docs && docs.map(doc => (
        <div className="image-wrap" key={doc.id}>
          <img className="image" src={doc.url} alt={doc.imageName} style={{width: "100%"}} />
        </div>
      ))}
    </div>
  )
}