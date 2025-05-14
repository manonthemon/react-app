// This is a simple React component that returns a header element with the text "Hello {User Name} or {World}!".

function Message() {
    //JSX: JS XML
  const name = "Maciek";
  if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;
