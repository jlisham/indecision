"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.delOptions = _this.delOptions.bind(_this);
    _this.delOneOption = _this.delOneOption.bind(_this);
    _this.selOption = _this.selOption.bind(_this);
    _this.addOptions = _this.addOptions.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.options.length !== prevState.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("will unmount");
    }
  }, {
    key: "delOptions",
    value: function delOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "delOneOption",
    value: function delOneOption(option2Del) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option2Del !== option;
          })
        };
      });
    }
  }, {
    key: "selOption",
    value: function selOption() {
      var randNum = Math.floor(Math.random() * this.state.options.length);
      var selOpt = this.state.options[randNum];
      console.log(selOpt);
    }
  }, {
    key: "addOptions",
    value: function addOptions(option) {
      if (!option) {
        return "enter valid option";
      } else if (this.state.options.indexOf(option) > -1) {
        return "option already exists";
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: "silly lil app..." }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          selOption: this.selOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          delOptions: this.delOptions,
          delOneOption: this.delOneOption
        }),
        React.createElement(AddOption, { addOptions: this.addOptions })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.saveNewOpt = _this2.saveNewOpt.bind(_this2);
    _this2.state = {
      err: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "saveNewOpt",
    value: function saveNewOpt(e) {
      e.preventDefault();
      var opt = e.target.elements.option.value.trim();
      var err = this.props.addOptions(opt);
      this.setState(function () {
        return { err: err };
      });
      if (!err) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.err && React.createElement(
          "p",
          null,
          this.state.err
        ),
        React.createElement(
          "form",
          { onSubmit: this.saveNewOpt },
          React.createElement("input", { autoFocus: true, type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.selOption },
      "what should i do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      null,
      props.options.length === 0 && React.createElement(
        "li",
        null,
        "no options yet - add the first!"
      ),
      props.options && props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option,
          delOneOption: props.delOneOption
        });
      })
    ),
    props.options.length > 0 && React.createElement(
      "button",
      { onClick: props.delOptions },
      "clear options"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    props.optionText,
    " ",
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.delOneOption(props.optionText);
        }
      },
      " ",
      "X",
      " "
    )
  );
};

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "age: ",
      props.age
    )
  );
};

Header.defaultProps = {
  title: "Indecision",
  subTitle: undefined
};

IndecisionApp.defaultProps = { options: [] };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
