const uploadImage = (req, res) => {
  try {
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);
    
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    res.status(200).json({ 
      message: "Image uploaded successfully",
      filename: req.file.filename,
      path: req.file.path
    });
  } catch (error) {
    console.log("Error while uploading image", error);
    res.status(500).json({ message: "Error while uploading image", error: error.message });
  }
};

module.exports = uploadImage;
