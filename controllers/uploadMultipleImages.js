const uploadMultipleImages = (req, res) => {
  try {
    console.log("req.files:", req.files);
    console.log("req.body:", req.body);
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      path: file.path,
      size: file.size
    }));
    
    res.status(200).json({ 
      message: `${req.files.length} images uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    console.log("Error while uploading multiple images", error);
    res.status(500).json({ message: "Error while uploading multiple images", error: error.message });
  }
};

module.exports = uploadMultipleImages;
