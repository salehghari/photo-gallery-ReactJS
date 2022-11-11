import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])
  return (
    <div className="total-progress-bar">
      <div className="completed-progress-bar" style={{width: `${progress}%`}}></div>
    </div>
  )
}
