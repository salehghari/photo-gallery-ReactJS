import './style.css';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

export default function App() {
  return (
    <div className="App">
      <UploadForm />
      <ImageGrid />
    </div>
  );
}
