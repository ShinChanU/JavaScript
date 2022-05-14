const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev"; // 상수처리해두면 나중 변경 편의하다고 함

export const request = async (nodeId) => {
  // nodeId 유무에 따라 root dir를 할지 특정 dir을 조회할지
  try {
    const res = await fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`);
    if (!res.ok) {
      throw new Error("서버의 상태가 이상합니다.");
    }
    return res.json();
  } catch (e) {
    throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
  }
};
