





const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"h2 tag")]))


const heading = React.createElement("h1",{id:"header"},"hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);