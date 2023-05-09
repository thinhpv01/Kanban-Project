import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, TextField } from "@mui/material";
import {
  StarOutlined,
  StarBorderOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import boardApi from "../api/boardApi";
import EmojiPicker from "../components/common/EmojiPicker";
import Kanban from "../components/common/Kanban";
const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [icon, setIcon] = useState("");

  const boards = useSelector((state) => state.board.value);
  // const favouriteList = useSelector((state) => state.favourites.value);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const res = await boardApi.getOne(boardId);
        console.log({ res });
        setTitle(res.title);
        setDescription(res.description);
        setSections(res.sections);
        setIsFavourite(res.favourite);
        setIcon(res.icon);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };
    getBoard();
  }, [boardId]);

  const addFavourite = () => {};
  const deleteBoard = () => {};
  const onIconChange = () => {};
  const updateTitle = () => {};
  const updateDescription = () => {};

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton variant="outlined" onClick={addFavourite}>
          {isFavourite ? (
            <StarOutlined color="warning" />
          ) : (
            <StarBorderOutlined />
          )}
        </IconButton>
        <IconButton variant="outlined" color="error" onClick={deleteBoard}>
          <DeleteOutlined />
        </IconButton>
      </Box>
      <Box>
        <Box>
          <EmojiPicker icon={icon} onChange={onIconChange} />
          <TextField
            value={title}
            onChange={updateTitle}
            placeholder="Untitled"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutline": { border: "unset " },
              "& .MuiOutlinedInput-root": {
                fontSize: "2rem",
                fontWeight: "700",
              },
            }}
          />
          <TextField
            value={description}
            onChange={updateDescription}
            placeholder="Add a description"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutline": { border: "unset " },
              "& .MuiOutlinedInput-root": { fontSize: "0.8rem" },
            }}
          />
        </Box>
        <Box>
          <Kanban data={sections} boardId={boardId} />
        </Box>
      </Box>
    </>
  );
};

export default Board;
