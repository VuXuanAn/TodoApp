import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
const Index = (props) => {
    return (
        <div>
            <p>Công việc chưa hoàn thành</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>Content</th>
                        <th>is done</th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.todoList.map(todo => {
                        return (
                            <tr>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                                <td>
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" checked={todo.isDone} />
                                    </label>
                                </td>
                                <td>
                                    <AiFillDelete />
                                    <AiFillEdit />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Index;
