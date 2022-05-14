import Input from "./Input.js";
import ItemList from "./ItemList.js";
import SelectedItem from "./SelectedItem.js";
import { request } from "../api/api.js";

let cache = {};

function App($app) {
  this.state = {
    items: [],
    recommendLan: [],
    selectedLanguage: [],
  };

  // re

  const selectedItem = new SelectedItem({
    $app,
    initialState: [],
  });

  const input = new Input({
    $app,
    initialState: "",
    onChange: async (e) => {
      if (e.length === 0) {
        this.setState({
          recommendLan: [],
        });
      } else {
        if (cache[e]) {
          console.log("캐시");
          this.setState({
            ...this.state,
            recommendLan: cache[e],
          });
        } else {
          console.log("캐시아님");
          try {
            const res = await request(e);
            this.setState({
              ...this.state,
              recommendLan: res,
            });
            cache[e] = res;
          } catch (e) {
            // error
            console.log(e);
          }
        }
      }
    },
  });

  const itemList = new ItemList({
    $app,
    initialState: {
      recommendLan: this.state.recommendLan,
      index: this.state.index,
    },
    onSelect: (language) => {
      alert(language);
      const nextSelectedLanguage = [...this.state.items];
      const index = nextSelectedLanguage.findIndex(
        (selectedLanguage) => selectedLanguage === language
      );
      if (index > -1) {
        nextSelectedLanguage.splice(index, 1);
      }
      nextSelectedLanguage.push(language);

      this.setState({
        ...this.state,
        selectedLanguage: nextSelectedLanguage,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    // input.setState(this.state.value);
    itemList.setState({
      selectIndex: 0,
      items: this.state.recommendLan,
    });
    selectedItem.setState(this.state.selectedLanguage);
  };
}

export default App;
