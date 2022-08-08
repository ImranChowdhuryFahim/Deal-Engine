const baseDir = './public/uploads';
module.exports = {
  downloadFiles: (req, res) => {
    const { fileName } = req.params;
    res.download(`${baseDir}/${fileName}`);
  },
};
