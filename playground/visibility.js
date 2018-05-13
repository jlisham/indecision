class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: true
    };
  }
  toggle() {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggle}>
          {this.state.visible ? "hide" : "show"}
        </button>
        <p>{this.state.visible && "visible"}</p>
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// console.log("app.js: running");
// const appRoot = document.getElementById("app");
// let visible = true;

// //JSX - jsXML

// const toggle = e => {
//   visible = !visible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility</h1>
//       <button onClick={toggle}>{visible ? "hide" : "show"}</button>
//       <p>{visible && "visible"}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
