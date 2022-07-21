const cloudinary = require("../config/cloudinary");

const upload = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file, {
      overwrite: true,
      use_filename: true,
      unique_filename: true
    })
  
    return res.url;
  } catch (err) {
    throw err;
  }
}

module.exports = { upload };