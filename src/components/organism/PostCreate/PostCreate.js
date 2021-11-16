import React from "react";
import Button from "components/atoms/Button";

const PostCreate = () => {
  return (
    <form>
      <label>Title</label>
      <input type="text" name="content" placeholder="content" />
      <Button>Hola</Button>
    </form>
  );
};

export default PostCreate;
