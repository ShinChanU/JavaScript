import DataGrid from "./DataGrid.js";
import { request } from "../lib/api.js";
import data1 from "../../data/data1.js";
import data2 from "../../data/data2.js";
import data3 from "../../data/data3.js";

function App($app) {
  this.state = {
    data1Obj: {
      data: data1,
      value: "",
    },
    data2Obj: {
      data: data2,
      value: "",
    },
    data3Obj: {
      data: data3,
      value: "",
    },
  };

  const dataGrid1 = new DataGrid({
    $app,
    initialState: this.state.data1Obj,
    column: ["이메일", "이름", "생년월일", "주소", "점수", "생성일", "수정일"],
    key: 1,
    onClick: (index, key) => {
      // 구현 안됨.
      const nextState = this.state.data1Obj.sort((a, b) => {
        return a[key] - b[key];
      });
      this.setState({
        ...this.state,
        data1Obj: nextState,
      });
    },
    onChange: (e) => {
      const search = (obj, keyword) => {
        for (let key in obj) {
          let value = obj[key];
          if (typeof value === "object") {
            search(value, keyword);
          }
          if (value == keyword) {
            this.setState({
              ...this.state,
              data1Obj: {
                data: obj,
                value: e,
              },
            });
            return;
          }
        }
      };
      search(this.state.data1Obj.data, e);
    },
  });

  const dataGrid2 = new DataGrid({
    $app,
    initialState: this.state.data2Obj,
    column: [
      "이름",
      "총점",
      "평균",
      "HTML",
      "CSS",
      "JavaScript",
      "국어",
      "영어",
      "수학",
    ],
    key: 2,
    onClick: (index, key) => {
      const nextState = this.state.data2Obj.sort((a, b) => {
        return a[key] - b[key];
      });
      this.setState({
        ...this.state,
        data2Obj: nextState,
      });
    },
    onChange: (e) => {
      const search = (obj, keyword) => {
        for (let key in obj) {
          let value = obj[key];
          if (typeof value === "object") {
            search(value, keyword);
          }
          if (value == keyword) {
            this.setState({
              ...this.state,
              data3Obj: {
                data: obj,
                value: e,
              },
            });
            return;
          }
        }
      };
      search(this.state.data2Obj.data, e);
    },
  });

  const dataGrid3 = new DataGrid({
    $app,
    initialState: this.state.data3Obj,
    column: ["번호", "닉네임", "나이", "원격근무지", "포지션", "검증여부"],
    key: 3,
    onClick: (index, key) => {
      const nextState = this.state.data3Obj.sort((a, b) => {
        return b[key] - a[key];
      });
      this.setState({
        ...this.state,
        data3Obj: nextState,
      });
    },
    onChange: (e) => {
      const search = (obj, keyword) => {
        for (let key in obj) {
          let value = obj[key];
          if (typeof value === "object") {
            search(value, keyword);
          }
          if (value == keyword) {
            this.setState({
              ...this.state,
              data3Obj: {
                data: obj,
                value: e,
              },
            });
            return;
          }
        }
      };
      search(this.state.data3Obj.data, e);
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    dataGrid1.setState(this.state.data1Obj);
    dataGrid2.setState(this.state.data2Obj);
    dataGrid3.setState(this.state.data3Obj);
  };
}

export default App;
