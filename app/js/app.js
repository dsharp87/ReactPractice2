import React from 'react';
import ReactDOM from 'react-dom'
import NameList from './components/NameList';



class App extends React.Component {
    render() {
        return (
            <div>
                <NameList phrase="I'm on the top" />
                <NameList phrase="I'm on the bottom"/>
            </div>
        )
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


//this is old class way, its not supported aparently
// var App = React.createClass({
//     nameMapper: function() {
//         const nameArray = ["Danny", "Mojojojojo2", "Dude"]
//         return nameArray.map((name, i) => 
//             <li key={i}>{name}</li>
//         )
//     },
//     render: function(){
//         return (
//             <div>
//                 <Welcome firstName="Danny" lastName="Swayne"/>
//                 <ul>
//                     {this.nameMapper}
//                 </ul>
//                 <Welcome firstName="Jane" lastName="Doe" />
//             </div>
//         )
//     }
// })


// const App = (() => {
//     const nameArray = ["Danny", "Mojojojojo2", "Dude"];
//     const nameMapper = (() => 
        
//     //this is defining a css attribute that is referenced by style tag
//     // const redBackground = {
//     //     'backgroundColor': 'red',
//     //     'font-size' : '2em'
//     // }
// });








//shows the importance of virtual dom refreshing
// const MyApp = ((props) => {
//     const element = (
//         <div>
//             <h1>Hello to the Virtual DOM</h1>
//             <h3>I've been rednered {props} times!</h3>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById('app')
//     )
// });

// var numTimes = 0
// setInterval(() => {
//     numTimes += 1
//     MyApp(numTimes)
// }, 1000)