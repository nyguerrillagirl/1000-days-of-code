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

function log(item) {
  console.log('Logger: ', item);
}

function Logger({ children }) {
  return children(log);
}

function App() {
  return (
    <div>
      <Logger>
        {(log) => (
          <Button
            log={log}
            onClick={() => console.log('click handled')}
            title="Click me"
          />
        )}
      </Logger>
    </div>
  );
}

export default App;
