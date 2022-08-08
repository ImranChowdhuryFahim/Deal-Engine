/* eslint-disable no-unused-vars */
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const path = "./public/uploads";
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now() + file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");
module.exports = {
  uploadFiles: (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(500).json(err);
      }
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res
        .status(200)
        .send(`http://127.0.0.1:8000/api/download/${req.file.filename}`);
    });
  },
};
