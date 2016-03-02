import React from 'react';
import Hello from "./components/Hello.jsx";

main();

function main () {
    React.render(<Hello />, document.getElementById('app'));
}