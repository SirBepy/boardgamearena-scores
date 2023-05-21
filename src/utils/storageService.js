
const storageService = {
  setEmptySection: function (value) {
    localStorage.setItem("empty-section", value);
  },

  getEmptySection: function () {
    return JSON.parse(localStorage.getItem("empty-section"));
  },

  setWhitelisted: function (value) {
    localStorage.setItem("whitelisted", JSON.stringify(value));
  },

  getWhiteListed: function () {
    const whitelisted = JSON.parse(localStorage.getItem("whitelisted") ?? "{}")
    for (const playerName in whitelisted) {
      if (!whitelisted[playerName]) {
        delete whitelisted[playerName]
      }
    }
    return Object.keys(whitelisted);
  },

  setData: function (value) {
    localStorage.setItem("bga-data", JSON.stringify(value));
  },

  getData: function () {
    return JSON.parse(localStorage.getItem("bga-data") ?? "{}");
  },
};
export default storageService;
