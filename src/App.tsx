import { useState } from "react"
import ColorfulMessage from "./components/ColorfulMessage"

function App() {
  const [num, setNum] = useState(-999);

  return (
    <>
      <div>
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            <p>TODO</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
      <p>完了のTODO</p>
        <ul>
          <li>
            <p>TODO</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
