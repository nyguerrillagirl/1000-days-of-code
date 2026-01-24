function Button({ log, onClick, title }) {
  return (
    <button
      onClick={(e) => {
        log(e);
        onClick(e);
      }}
    >
      {title}
    </button>
  );
}

function withLogger(Component) {
  function log(item) {
    console.log('Logger: ', item);
  }

  return function (props) {
    return <Component log={log} {...props} />;
  };
}

const ButtonWithLogger = withLogger(Button);

function App() {
  return (
    <div>
      <ButtonWithLogger
        onClick={() => console.log('click handled')}
        title="Click me"
      />
    </div>
  );
}

export default App;
