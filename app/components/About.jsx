var React = require('react');

var About = (props) => {
	return (
      <div>
      	<h1 className="text-center">About Component</h1>
      	<p>This is a weather application built with react. It was part of an experiment in learning react and foundation.</p>
      	<p>Here are some of the tools used:</p>
      	<ul>
      		<li>
      			<a href="https://facebook.github.io/react">React</a> This was the JavaScript framework used.
      		</li>
      		<li>
      			<a href="http://openweathermap.org">Open Weather Map</a> I used Open Weather Map to search for weather data by city
      		</li>
      	</ul>
      </div>
    ) 
};

module.exports = About;
