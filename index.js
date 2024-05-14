const { executeQuery, selectQuery } = require("./dbcon.js");

selectQuery("SELECT * FROM vape")
  .then((e) => {
    console.log(e);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

executeQuery(
  "INSERT INTO vape (name, type,flavor) VALUES ('value1', 'value2','value3')"
)
  .then((e) => {
    console.log(e);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

selectQuery("SELECT * FROM vape")
  .then((e) => {
    console.log(e);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
