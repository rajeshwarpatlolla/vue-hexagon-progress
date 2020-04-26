# vue-hexagon

A Hexagon component for vue.js applications

![npm](https://img.shields.io/npm/v/vue-hexagon?color=brightgreen&style=plastic) ![MIT](https://img.shields.io/npm/l/vue-hexagon?color=brightgreen&style=plastic)

![screenshot.png](src/screenshot.png)
-----

## Demo
[You can see the demo here](https://rajeshwarpatlolla.github.io/vue-hexagon-demo/)

## How to use

#### Installation
````
npm install vue-hexagon --save
````

#### Usage
- In main.js add the below two lines of code

````
import Vue from 'vue';
import VueHexagon from 'vue-hexagon';

Vue.use(VueHexagon);
````

- In any component where you would like to use vue hexagon, you can create an options object with the below fields

````
const options = {
  width: 200,
  height: 200,
  primaryColor: '#45ad9a',
  secondaryColor: '#aaa',
  labelColor: '#000',
  label: '50%',
  value: 50,
  className: 'vue-hexagon-custom-class',
  thickness: 90,
  fontSize: 120,
};

````
- Then in the html code you can use as mentioned below
````
<VueHexagon :options="options">
````

- All the options are optional. If you don't pass any specific options, then the default options are as below

````
{
  width: 200,
  height: 200,
  primaryColor: '#45ad9a',
  secondaryColor: '#aaa',
  labelColor: '#000',
  label: '50%',
  value: 50,
  className: 'vue-hexagon-custom-class',
  thickness: 90,
  fontSize: 120,
}
````

**Note:** If you are looping through an array to have multiple hexagons, please give unique class names for each of them.



## License
[MIT](https://github.com/rajeshwarpatlolla/vue-hexagon/blob/master/LICENSE.md)

## Contact
Gmail : rajeshwar.patlolla@gmail.com
Github : https://github.com/rajeshwarpatlolla
Twitter : https://twitter.com/rajeshwar_9032
Facebook : https://www.facebook.com/rajeshwarpatlolla
