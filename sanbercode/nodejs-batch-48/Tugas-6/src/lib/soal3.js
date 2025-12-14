export const checkScore = (data) => {
  let arrData = data.split(",");
  const objData = {};
  arrData.forEach((element) => {
    let [key, data] = element.split(":");
    if (key === "name") {
      objData.name = data;
    } else if (key === "kelas") {
      objData.kelas = data;
    } else {
      objData.score = data;
    }
  });
  return objData;
};
