const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
// ReactDOM.render() takes 2 arguments. The first is the component to render (const JSX) and the second is the target node retrieved here using getElementById
ReactDOM.render(JSX, document.getElementById("challenge-node"))
