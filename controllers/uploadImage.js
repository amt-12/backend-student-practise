const uploadImage =(req,res,next,file)=>{
try {
    console.log("file from frontend", file);

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "uploads/");
        },
      
        filename: function (req, file, cb) {
          const uniqueName = file.name
          cb(null, uniqueName);
        }
      });
      
      const upload = multer({ storage: storage });
    res.status(200).json({ message: "Image uploaded successfully" });
} catch (error) {
    
res.status(500).json({ message: "Error while uploading image" });
    console.log("Error while uploading image", error);
}
}
module.exports = uploadImage;