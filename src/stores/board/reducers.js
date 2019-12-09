import {
  SET_TITLE_INPUT,
  SET_CONTENT_INPUT,
  CREATE_BOARD,
  DELETE_BOARD,
  EDIT_BOARD
} from "./actions";

/*** 3. 초기 상태 정의 (defaultState) ***/
const initialState = {
  titleInput: "",
  contentInput: "",
  board: [
    {
      key: "1",
      title: "제목1",
      content: "내용1입니다."
    },
    {
      key: "2",
      title: "제목2",
      content: "내용2 안녕하세요."
    }
  ],
  lastBoardId: 3
};

/*** 4. REDUCER 정의 ***/
function boardApp(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE_INPUT:
      return Object.assign({}, state, {
        titleInput: action.payload
      });
    case SET_CONTENT_INPUT:
      return Object.assign({}, state, {
        contentInput: action.payload
      });
    case CREATE_BOARD:
      return Object.assign({}, state, {
        board: state.board.concat({
          title: action.payload.title,
          content: action.payload.content,
          key: String(state.lastBoardId)
        }),
        lastBoardId: state.lastBoardId + 1
      });

    case EDIT_BOARD:
      return Object.assign({}, state, {
        board: state.board.map((value, index) => {
          // console.log(value.key);
          // console.log(action.payload.boardId);
          if (action.payload.boardId == value.key) {
            return {
              title: action.payload.title,
              content: action.payload.content,
              key: value.key
            };
          } else {
            return value;
          }
        })
      });

    case DELETE_BOARD:
      return Object.assign({}, state, {
        board: state.board.filter((value, index) => {
          console.log(value);
          console.log(action);
          console.log(value.key);
          console.log(action.payload.boardId);

          if (value.key == action.payload.boardId) {
            return false;
          }
          return true;
        })
      });

    default:
      return state;
  }
}
export default boardApp;

// /*** 4. REDUCER 정의 ***/
// function boardApp(state = initialState, action) {
//   // action ==> Action 객체
//   switch (action.type) {
//     case SET_TITLE_INPUT:
//       return Objcet.assign({}, state, {
//         titleInput: action.payload
//       });
//     case SET_CONTENT_CONTENT:
//       return Object.assign({}, state, {
//         contentInput: action.payload
//       });
//     // return { ...state, contentInput: action.payload };

//     case CREATE_BOARD:
//       return Object.assign({}, state, {
//         board: [
//           ...state.board,
//           {
//             key: String(key),
//             title: action.payload.title,
//             content: action.payload.content
//           }
//         ],
//         lastBoardId: state.lastBoardId + 1
//       });

//     case DELETE_BOARD:
//       return Object.assign({}, state, {
//         ...state,
//         board: state.board.filter(({ key }) => key !== action.payload.itemKey)
//       });

//     case EDIT_BOARD:
//       return Object.assign({}, state, {
//         ...state,
//         board: state.board.map(item => {
//           if (item.key == itemKey) {
//             return {
//               key: itemKey,
//               title: title,
//               content: content
//             };
//           } else {
//             return item;
//           }
//         })
//       });

//     default:
//       return state;
//   }
// }

// export default boardApp;
