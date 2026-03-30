import { useState } from "react";

const upload = () => {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleupload = async () => {
    if (!file) {
      console.log("file is reuired");
      alert("entering a file is requires");
      return;
    }
    //validate type of file
    if (file.type !== "application/pdf") {
      alert("only pdfs are allowed");
      return;
    }
    //built in js object used to send data in same format as an html form
    //when u send it to backend it woerks like html form only
    const formData = new FormData();
    formData.append("file", file);
    try {
      setLoading(true);
      await API.post("/documents/upload", formData);
      alert("file uploaded");
    } catch (error) {
      alert("upload failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fileupload">
      <h2>UPLOAD YOURFILE</h2>
      <input
        className="fileuploadArea"
        placeholder="input ur file here"
        accept=".pdf ,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
      ></input>
      {file && <p>selected:{file.name}</p>}
      {/*disable is the property that make them unusable <div className="when btn is clicked it make it disable-disallowing multiple uploads"></div>*/}
      <button type="submit" onSubmit={handleupload} disabled={loading}>
        {loading ? "uploading..." : "upload"}
      </button>
    </div>
  );
};
