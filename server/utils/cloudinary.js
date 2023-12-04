const cloudinary = require("cloudinary").v2;

exports.cdupload = async (file, folder) => {
  return (
    await cloudinary.uploader.upload(file.tempFilePath, {
      folder,
      resource_type: "auto",
    })
  ).secure_url;
};
