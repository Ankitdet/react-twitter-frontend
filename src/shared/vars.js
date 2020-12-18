module.exports = {
  apiUrl:
    window.location.origin === "https://react-twitter-frontend.herokuapp.com"
      ? "https://react-twitter-backend-new.herokuapp.com"
      : "http://localhost:5000"
};
