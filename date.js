exports.getDate = function() {
  let today = new Date();

  let options = {
    day: "numeric",
    month: "long",
    weekday: "long"
  };

return today.toLocaleDateString('en-GB', options);
}

exports.getDay = function() {
  let today = new Date();

  let options = {
    weekday: "long"
  };

  return today.toLocaleDateString('en-GB', options);
};
