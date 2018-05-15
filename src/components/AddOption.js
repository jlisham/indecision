import React from "react";

export default class AddOption extends React.Component {
  state = {
    err: undefined
  };

  saveNewOpt = e => {
    e.preventDefault();
    const opt = e.target.elements.option.value.trim();
    const err = this.props.addOptions(opt);
    this.setState(() => ({ err }));
    if (!err) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.err && <p class="err">{this.state.err}</p>}
        <form onSubmit={this.saveNewOpt} className="inputForm">
          <input autoFocus type="text" className="input" name="option" />
          <button className="button">add option</button>
        </form>
      </div>
    );
  }
}
