const API_END_POINT =
  // "/web/"; 제출
  "../../data/data1.json";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}`);
    if (!res.ok) {
      throw new Error("서버의 상태가 이상합니다.");
    }
    return res.json();
  } catch (e) {
    throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
  }
};

// export const request = async (url) => {
//   const res = await fetch("../../data/data1.json");
//   return await res.json();
// };

// loadJSON("../../data/data1.json").then((data) => {
//   console.log(data[0].name);
// });
