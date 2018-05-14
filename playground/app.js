class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.delOptions = this.delOptions.bind(this);
    this.delOneOption = this.delOneOption.bind(this);
    this.selOption = this.selOption.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("will unmount");
  }

  delOptions() {
    this.setState(() => ({ options: [] }));
  }
  delOneOption(option2Del) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option2Del !== option)
    }));
  }
  selOption() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const selOpt = this.state.options[randNum];
    console.log(selOpt);
  }
  addOptions(option) {
    if (!option) {
      return "enter valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }
  render() {
    return (
      <div>
        <Header subTitle="silly lil app..." />
        <Action
          hasOptions={this.state.options.length > 0}
          selOption={this.selOption}
        />
        <Options
          options={this.state.options}
          delOptions={this.delOptions}
          delOneOption={this.delOneOption}
        />
        <AddOption addOptions={this.addOptions} />
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.saveNewOpt = this.saveNewOpt.bind(this);
    this.state = {
      err: undefined
    };
  }
  saveNewOpt(e) {
    e.preventDefault();
    const opt = e.target.elements.option.value.trim();
    const err = this.props.addOptions(opt);
    this.setState(() => ({ err }));
    if (!err) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.err && <p>{this.state.err}</p>}
        <form onSubmit={this.saveNewOpt}>
          <input autoFocus type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.selOption}>
        what should i do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <ul>
        {props.options.length === 0 && <li>no options yet - add the first!</li>}
        {props.options &&
          props.options.map(option => (
            <Option
              key={option}
              optionText={option}
              delOneOption={props.delOneOption}
            />
          ))}
      </ul>
      {props.options.length > 0 && (
        <button onClick={props.delOptions}>clear options</button>
      )}
    </div>
  );
};

const Option = props => {
  return (
    <li>
      {props.optionText}{" "}
      <button
        onClick={e => {
          props.delOneOption(props.optionText);
        }}
      >
        {" "}
        X{" "}
      </button>
    </li>
  );
};

const User = props => {
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
  subTitle: undefined
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
