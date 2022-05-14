import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";
import { request } from "../lib/api.js";
import ImageView from "./Image.js";
import Loading from "./Loading.js";

const cache = {};

function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
    selectedFilePath: null,
    isLoading: false,
  };

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: [],
    onClick: (index) => {
      if (index === null) {
        this.setState({
          ...this.state,
          isRoot: true,
          depth: [],
          nodes: cache.root,
        });
        return;
      }

      if (index === this.state.depth.length - 1) return;
      const nextState = { ...this.state };
      const nextDepth = this.state.depth.slice(0, index + 1);

      this.setState({
        ...nextState,
        depth: nextDepth,
        nodes: cache[nextDepth[nextDepth.length - 1].id],
      });
    },
  });

  const nodes = new Nodes({
    $app, // DOM(접근)
    initialState: [],
    onClick: async (node) => {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      try {
        if (node.type === "DIRECTORY") {
          // 캐시에 있는지 확인
          if (cache[node.id]) {
            // 있으면 캐시에서 씀
            this.setState({
              ...this.state,
              depth: [...this.state.depth, node],
              nodes: cache[node.id],
              isRoot: false,
            });
          } else {
            // 없으면 요청하고 캐시에 넣음
            const nextState = await request(node.id);
            this.setState({
              ...this.state,
              depth: [...this.state.depth, node],
              nodes: nextState,
              isRoot: false,
            });
            cache[node.id] = nextState;
          }
        } else if (node.type === "FILE") {
          this.setState({
            ...this.state,
            selectedFilePath: node.filePath,
          });
        }
      } catch (e) {
      } finally {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }

      // DIRECTORY 경우 처리, breadcrumb 처리할 예정, Node 컴포넌트에서 모름
      //   console.log("dir");
      // } else if (node.type === "FILE") {
      //   // FILE 경우 처리
      //   console.log("file");
      // }
    },
    onBackClick: async () => {
      // backClick은 무조건 캐시에 있음
      this.setState({
        ...this.state,
        isLoading: true,
      });
      try {
        const nextState = { ...this.state };
        nextState.depth.pop();
        const prevNodeId =
          nextState.depth.length === 0
            ? null
            : nextState.depth[nextState.depth.length - 1].id;
        if (prevNodeId === null) {
          this.setState({
            ...nextState,
            isRoot: true,
            nodes: cache.root,
          });
        } else {
          this.setState({
            ...nextState,
            isRoot: false,
            nodes: cache[prevNodeId],
          });
        }
      } catch (e) {
        // 예외
      } finally {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    },
  });

  const image = new ImageView({
    $app,
    initialState: this.state.selectedFilePath,
    modalClose: () => {
      this.setState({
        ...this.state,
        selectedFilePath: null,
      });
    },
  });

  const loading = new Loading({
    $app,
    initialState: this.state.isLoading,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
    image.setState(this.state.selectedFilePath);
    loading.setState(this.state.isLoading);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      isRoot: true,
      isLoading: true,
    });

    try {
      const rootNodes = await request();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes,
      });
      cache.root = rootNodes;
    } catch (e) {
      // error
      this.onError(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  init();
}

export default App;

// 0514 done.
// https://prgms.tistory.com/53
// https://programmers.co.kr/skill_check_assignments/100
