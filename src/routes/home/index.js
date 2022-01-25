import { h } from "preact";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TODOS_DATA_ACTION } from "../../redux/actions";
import { useEffect } from "preact/hooks";
import css from "@emotion/styled";
import style from "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const minwidth = css`
  min-width: 650px;
`;

const Home = () => {
  const dispatch = useDispatch();

  //Fetching all Todo values from Redux store
  const ALL_TODOS = useSelector((state) => state.todosData.todos);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        //Dispatch new todo values from API to Redux store
        dispatch(TODOS_DATA_ACTION(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <TableContainer component={Paper}>
        <Table css={minwidth} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ALL_TODOS.length !== 0 ? (
              ALL_TODOS.map((todo) => (
                <TableRow
                  key={todo.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {todo.id}
                  </TableCell>
                  <TableCell>{todo.userId}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>
                    {todo.completed === true ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  colSpan="4"
                >
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
