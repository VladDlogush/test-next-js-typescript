import React, { useState } from 'react';
import shortid from 'shortid';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

type NewPostProps = {
  router?: any;
};

interface NewPost {
  title?: string;
  body?: string;
  id?: string | number;
}

// interface NewPost {
//   title: string | number;
//   body: string | number;
//   id: string | number;
// }

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const NewPost: React.FunctionComponent<NewPostProps> = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    }

    if (name === 'body') {
      setBody(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newPost: NewPost = {
      title,
      body,
      id: shortid.generate(),
    };

    dispatch(addPost(newPost));

    setTitle('');
    setBody('');
  };

  return (
    <Layout>
      <h1>Create post:</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          name="title"
          variant="outlined"
          value={title}
        />
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Body"
            multiline
            rows="4"
            name="body"
            value={body}
            onChange={handleChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Add Post
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Return to posts
          </Button>
        </div>
      </form>
    </Layout>
  );
};
export default withRouter(NewPost);
