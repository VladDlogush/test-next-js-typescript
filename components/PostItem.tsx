import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost, IAction } from '../redux/actions';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  deleteButton: {
    position: 'absolute',
    color: 'blue',
    right: 0,
    bottom: 0,
    marginRight: 10,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ListItem = styled.li`
  position: relative;
  width: 31%;
  height: 130px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 5px 6px 5px 0px rgba(165, 167, 189, 1);
  list-style: none;
  margin-bottom: 40px;
  border: 1px solid #2360e8;
  margin-right: 2%;
  :nth-child(3n) {
    margin-right: 0;
  }
`;

const SubTitle = styled.p`
  color: #1d2124;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 0 15px 10px;
`;

const Title = styled.p`
  color: 1d2124;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  padding: 10px 15px 5px;
`;

type postItem = {
  id?: string | number;
  title?: string | number;
  body?: string | number;
};

// type idPost = {
//   id: string | number;
// };

const PostItem: React.FunctionComponent<postItem> = ({
  id,
  title,
  body,
}: postItem) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement;

    if (name === 'delete') {
      dispatch(deletePost(id));
    }

    if (name === 'update') {
      dispatch(updatePost(id));
    }
  };

  return (
    <>
      <ListItem>
        <Title>{title}</Title>
        <SubTitle>{body}</SubTitle>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          name="update"
          onClick={handleClick}
        >
          Upload
        </Button>
        <IconButton
          aria-label="delete"
          className={classes.deleteButton}
          type="submit"
          name="delete"
          onClick={handleClick}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
};

export default PostItem;
