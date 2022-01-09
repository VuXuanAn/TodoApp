
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBlog } from './action/todo.action';
import './App.css';
import Table from './component/todoTable'
import banner from './image/banner.png'
function App() {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlog())
  }, []);


  return (
    <div className="App">
      <div className='container'>
        <h2>Todo App</h2>
        <div className='row mt-5'>
          <div className='col-sm-4'>
            <div className='actionTodo  mt-5'>
              <p>Thêm công việc mới</p>
              <div class="form-group">
                <label for="usr">Title</label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label for="pwd">Content</label>
                <input type="text" class="form-control" id="pwd" />
              </div>
            </div>
          </div>
          <div className='col-sm-8 '>
            <div className='listTodo'>
              <button type="button" className="btn btn-primary mb-2">Thêm công việc</button>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
