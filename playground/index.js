// const user = {
//   name: "tperson",
//   cities: ["dalbo", "grasston", "isanti"],
//   prPlaces() {
//     return (cityMsg = this.cities.map(city => this.name + " lived in " + city));
//   }
// };
// console.log(user.prPlaces());

// const template = (
//   <div>
//     <h1>{app.title.length > 0 ? app.title : "anon"}</h1>
//     {getLoc(app.subTitle)}
//     {app.age && app.age > 20 && <p>age: 55</p>}
//   </div>
// );

const multi = {
  x: 2,
  nums: [3, 5, 7, 2, 9, 5, 3],
  multiply() {
    return this.nums.map(y => this.x * y);
  }
};

console.log(multi.multiply());

let count = 0;
const addOne = () => {
  count++;
  renderCounter();
};
const subOne = () => {
  count--;
  renderCounter();
};
const reset = () => {
  count = 0;
  renderCounter();
};

const appRoot2 = document.getElementById("app");

const renderCounter = () => {
  const template2 = (
    <div>
      <h1>cnt: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template2, appRoot2);
};

renderCounter();
