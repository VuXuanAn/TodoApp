import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
const Index = () => {
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
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                </tbody>
                <p>Công việc đã hoàn thành</p>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />
                            </label>
                        </td>
                        <td>
                            <AiFillDelete />
                            <AiFillEdit />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Index;
