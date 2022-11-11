import useFirestore from "../hooks/useFirestore";

export default function ImageGrid() {
  const { docs } = useFirestore("images");
  
  return (
    <div className="image-grid">
      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.url} alt={doc.imageName} style={{width: "100%"}} />
        </div>
      ))}
    </div>
  )
}
