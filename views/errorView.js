// errorView.js
class ErrorView {
    notFound(res, message) {
      res.status(404).json({ error: message });
    }
  
    badRequest(res, message) {
      res.status(400).json({ error: message });
    }
  }
  
module.exports = new ErrorView();
  