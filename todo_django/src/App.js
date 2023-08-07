import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from './TodoList';
import Error from './Error';

function App() {
  // 신발 데이터 관리

  // 경로 설정
  let router = createBrowserRouter(
    [
      { path: "/", element: <TodoList />, errorElement: <Error />, 
      
     },

    ],
    { basename: "/" }
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  }
export default App;
