class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      cnt: 0
    };
  }
  plusOne() {
    this.setState(prevState => {
      return { cnt: prevState.cnt + 1 };
    });
  }
  minusOne() {
    this.setState(prevState => {
      return { cnt: prevState.cnt - 1 };
    });
  }
  reset() {
    this.setState(() => {
      return { cnt: 0 };
    });
  }
  render() {
    return (
      <div>
        <h3>Count: {this.state.cnt}</h3>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// const multi = {
//   x: 2,
//   nums: [3, 5, 7, 2, 9, 5, 3],
//   multiply() {
//     return this.nums.map(y => this.x * y);
//   }
// };

// console.log(multi.multiply());

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const subOne = () => {
//   count--;
//   renderCounter();
// };
// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// const appRoot2 = document.getElementById("app");

// const renderCounter = () => {
//   const template2 = (
//     <div>
//       <h1>cnt: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(template2, appRoot2);
// };

// renderCounter();
