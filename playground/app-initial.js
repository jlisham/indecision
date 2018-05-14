console.log("app.js: running");
const appRoot = document.getElementById("app");

//JSX - jsXML
const app = {
  title: "Indecision",
  subTitle: "desc",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const opt = e.target.elements.option.value;
  if (opt) {
    app.options.push(opt);
    e.target.elements.option.value = "";
  }
  render();
};

const clearOptions = () => {
  app.options = [];
  render();
};

const decisionMade = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const selOpt = app.options[randNum];
  console.log(selOpt);
};

const nums = [1, 4, 7, 10];
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && app.subTitle.length > 0 && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "avail options: " : "no options"}</p>
      <button disabled={app.options.length === 0} onClick={decisionMade}>
        what should I do?
      </button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
      <button onClick={clearOptions}>clear options</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
