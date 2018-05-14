import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  selOption = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const selOpt = this.state.options[randNum];
    console.log(selOpt);
    this.setState(() => ({ selectedOption: selOpt }));
  };

  addOptions = option => {
    if (!option) {
      return "enter valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  delOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  delOneOption = option2Del => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option2Del !== option)
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            selOption={this.selOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              delOptions={this.delOptions}
              delOneOption={this.delOneOption}
            />
            <AddOption addOptions={this.addOptions} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
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
}
