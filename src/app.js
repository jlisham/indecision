class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.delOptions = this.delOptions.bind(this);
    this.selOption = this.selOption.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.state = {
      options: []
    };
  }
  delOptions() {
    this.setState(() => {
      return { options: [] };
    });
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
    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  }
  render() {
    const title = "Indecision";
    const subTitle = "silly lil app...";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          selOption={this.selOption}
        />
        <Options options={this.state.options} delOptions={this.delOptions} />
        <AddOption addOptions={this.addOptions} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.selOption}
        >
          what should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map(option => (
            <Option key={option} optionText={option} />
          ))}
        </ol>
        <button onClick={this.props.delOptions}>clear options</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.optionText}</li>;
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
    this.setState(() => {
      return { err };
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.err && <p>{this.state.err}</p>}
        <form onSubmit={this.saveNewOpt}>
          <input type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
