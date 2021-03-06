import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// //////////////////////////////////////////  RENDERING ELEMENTS
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>Today is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// // //////////////////////////////////////////  COMPONENTS AND PROPS
// function ShowSomeThing(props) {
//   props.name = 'Ty';
//   return <h1>{props.name}</h1>;
// }
// ReactDOM.render(<ShowSomeThing name='Minh' />, document.getElementById('root'));

// // // //////////////////////////////////////////  STATE AND LIFECYCLE
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Clock : {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
//   tick() {
//     this.setState({ date: new Date() });
//   }
//   componentDidMount() {
//     this.timeID = setInterval(() => {
//       this.tick();
//     }, 1000);
//     console.log(this.timeID);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timeID);
//     console.log('reach it');
//   }
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// // // // ////////////////////////////////////////// HANDLING EVENTS
// function ActionLink() {
//   function handler(e) {
//     e.preventDefault();
//     console.log(e);
//     console.log('Clicked');
//   }
//   return (
//     <a href='/meantea' onClick={handler}>
//       Clicker
//     </a>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { toggle: false };
//   }
//   handler = () => {
//     this.setState({ toggle: !this.state.toggle });
//   };
//   render() {
//     return (
//       <button onClick={this.handler}>{this.state.toggle ? 'ON' : 'OFF'}</button>
//     );
//   }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));

// ////////////////////////////////////////// CONDITIONAL RENDERING

// class Guest extends React.Component {
//   render() {
//     return <h1>Please Sign in</h1>;
//   }
// }

// class User extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hi there, Welcome back</h1>
//       </div>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     if (this.props.isLoggedIn) {
//       return <User />;
//     }
//     return <Guest />;
//   }
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// ////////////////////////////////////////// LISTS and KEYS

// const NumberLists = (props) => {
//   const numbers = props.numbers;
//   const lists = numbers.map((number) => (
//     <List key={number.toString()} number={number} />
//   ));
//   return <ul>{lists}</ul>;
// };

// const List = (props) => {
//   return <li>{props.number}</li>;
// };

// const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberLists numbers={numbers} />,
//   document.getElementById('root')
// );

// ////////////////////////////////////////// FORMS
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'Name' };
//   }

//   onChangeHandler = (e) => {
//     this.setState({ value: e.target.value });
//   };
//   onSubmitHandler = (e) => {
//     console.log(`This is the new state ${this.state.value}`);
//     e.preventDefault();
//   };

//   render() {
//     // return (
//     //   <form onSubmit={this.onSubmitHandler}>
//     //     <label>
//     //       Name:
//     //       <input
//     //         type='text'
//     //         value={this.state.value}
//     //         onChange={this.onChangeHandler}
//     //       ></input>
//     //     </label>
//     //     <input type='submit' value='Submit'></input>
//     //   </form>
//     // );
//     return (
//       <select>
//         <option value='grapefruit'>Grapefruit</option>
//         <option value='lime'>Lime</option>
//         <option selected value='coconut'>
//           Coconut
//         </option>
//         <option value='mango'>Mango</option>
//       </select>
//     );
//   }
// }

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'coconut' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select
//             multiple={true}
//             value={['mango', 'coconut']}
//             onChange={this.handleChange}
//           >
//             <option value='grapefruit'>Grapefruit</option>
//             <option value='lime'>Lime</option>
//             <option value='coconut'>Coconut</option>
//             <option value='mango'>Mango</option>
//           </select>
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     );
//   }
// }
// // ReactDOM.render(<FlavorForm />, document.getElementById('root'));
// ReactDOM.render(<input value='hi' />, document.getElementById('root'));

// setTimeout(function () {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 5000);

// ////////////////////////////////////////// LIFTING STATE UP
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit',
// };

// function toCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// const tryConvert = (temperature, convert) => {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// };

// class BoilingWater extends React.Component {
//   render() {
//     return (
//       <p>
//         {this.props.celsius >= 100 ? 'Water would boil' : 'Water wouldnt boil'}
//       </p>
//     );
//   }
// }

// class TemperatureInput extends React.Component {
//   handleChange = (e) => {
//     this.props.handleTemperatureChange(e.target.value);
//   };
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { temperature: '', scale: 'c' };
//   }
//   handleCelsiusChange = (temperature) => {
//     this.setState({ temperature: temperature, scale: 'c' });
//   };
//   handleFahrenheitChange = (temperature) => {
//     this.setState({ temperature: temperature, scale: 'f' });
//   };
//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.state.scale;
//     const celsius =
//       scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit =
//       scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput
//           temperature={celsius}
//           scale='c'
//           handleTemperatureChange={this.handleCelsiusChange}
//         />
//         <TemperatureInput
//           temperature={fahrenheit}
//           scale='f'
//           handleTemperatureChange={this.handleFahrenheitChange}
//         />
//         <BoilingWater celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Calculator />, document.getElementById('root'));

// ////////////////////////////////////////// COMPOSITION AND INHERITANCE
// class ParentComponent extends React.Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <ParentComponent>
//         Hello world. My name is Nguyen Thanh Minh. I'm 21 current self-taught
//         developer. Nice to meet you
//       </ParentComponent>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// ////////////////////////////////////////// THINKING IN REACT
// const PRODUCTS = [
//   {
//     category: 'Sporting Goods',
//     price: '$49.99',
//     stocked: true,
//     name: 'Football',
//   },
//   {
//     category: 'Sporting Goods',
//     price: '$9.99',
//     stocked: true,
//     name: 'Baseball',
//   },
//   {
//     category: 'Sporting Goods',
//     price: '$29.99',
//     stocked: false,
//     name: 'Basketball',
//   },
//   {
//     category: 'Electronics',
//     price: '$99.99',
//     stocked: true,
//     name: 'iPod Touch',
//   },
//   {
//     category: 'Electronics',
//     price: '$399.99',
//     stocked: false,
//     name: 'iPhone 5',
//   },
//   { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
// ];

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan='2'>{category}</th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ? (
//       product.name
//     ) : (
//       <span style={{ color: 'red' }}>{product.name}</span>
//     );

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;
//     const rows = [];
//     let lastCategory = null;
//     // Fulfill the qualified products
//     this.props.products.forEach((product) => {
//       // filter the unnecessary product
//       if (product.name.indexOf(filterText) === -1) {
//         console.log('b');
//         return;
//       }
//       // filter the products that are not in the Stock
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category}
//           />
//         );
//       }
//       rows.push(<ProductRow product={product} key={product.name} />);
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   handleFilterTextChange = (e) => {
//     this.props.onFilterTextChange(e.target.value);
//   };
//   handleInStockChange = (e) => {
//     this.props.onInStockChange();
//   };
//   render() {
//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Search...'
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type='checkbox'
//             value={this.props.inStockOnly}
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />{' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }
// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { filterText: '', inStockOnly: false };
//   }
//   handleFilterTextChange = (filterText) => {
//     this.setState({ filterText: filterText });
//   };
//   handleInStockChange = () => {
//     this.setState({ inStockOnly: !this.state.inStockOnly });
//   };
//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );

// ////////////////////////////////////////// HOOKS at a Glance
// const Count = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });
//   return (
//     <div>
//       This was clicked {count} times
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };
// ReactDOM.render(<Count />, document.getElementById('root'));

// // ////////////////////////////////////////// EFFECT HOOK
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   useEffect(() => {
//     document.title = `${count} times`;
//   }, [count]);

//   const handleChange = () => {
//     setCount(count + 1);
//   };
//   const handleChange2 = () => {
//     setCount2(count2 + 1);
//   };

//   return (
//     <div>
//       <p>You clicked this {count} times</p>
//       <p>You clicked this {count2} times</p>
//       <button onClick={handleChange}>Click</button>
//       <button onClick={handleChange2}>Click2</button>
//     </div>
//   );
// };
// ReactDOM.render(<App />, document.getElementById('root'));

////////////////////////////////////////// Rules of HOOKS

const App = (props) => {
  const [name, setName] = useState('Minh');
  useEffect(() => {
    localStorage.setItem('formData', name);
  });

  const [surname, setSurname] = useState('Nguyen');
  useEffect(() => {
    document.title = `${name} + ${surname}`;
  });
  return <div></div>;
};
ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
