module.exports = function errorHandler (res, err, message) {
  res.status(500).send({
    message,
    err
  })
}
