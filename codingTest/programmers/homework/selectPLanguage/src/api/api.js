const BASE_URL =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (language) => {
  try {
    const res = await fetch(`${BASE_URL}/languages?keyword=${language}`);
    if (!res.ok) {
      throw new Error("서버 상태가 이상해요!");
    }
    return res.json();
  } catch (e) {
    // 에러처리
    console.log(e);
  }
};
