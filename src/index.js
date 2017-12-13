import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as d3 from 'd3';
import $ from 'jquery';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*ajax request to grab the ticker data JSON
from the REST API and then populate the ticker
and cycle the ticker*/
$.get("http://ec2-34-229-105-41.compute-1.amazonaws.com:8080/tickerData", function(data){
	var teamBool = data;
	for(var i=0; i<9; i++){
		var imgTar = '#img' + i;
		if(teamBool[i].over == 1){$(imgTar).removeClass();
			$(imgTar).addClass('tick up');}
		else{$(imgTar).removeClass();
			$(imgTar).addClass('tick down');}
		var target1 = '#pos' + i;
		var target2 = '#num' + i;
		$(target1).html(teamBool[i].team + " ");
		$(target2).html(" " + teamBool[i].games.toString());
	}

	var cycle = 1;
	setInterval(function(){
		$(".marquee").animate({
			marginLeft: '-=12.5%'
		}, 2000, 'linear', function(){
			for(var i=0; i<9; i++){
				var j = i + cycle;
				if(j>29){j -= 30;}
				var imgTar = '#img' + i;
				if(teamBool[j].over == 1){$(imgTar).removeClass();
					$(imgTar).addClass('tick up');}
				else{$(imgTar).removeClass();
					$(imgTar).addClass('tick down');}
				var target1 = '#pos' + i;
				var target2 = '#num' + i;
				$(target1).html(teamBool[j].team + " ");
				$(target2).html(" " + teamBool[j].games.toString());
			}
			$(".marquee").css( "margin", "0px" );
			if(cycle<29){cycle++;}else if(cycle>=29){cycle=0;}
		});
	},2000);
});

//ajax request to grab the standings from the REST API
$.get("http://ec2-34-229-105-41.compute-1.amazonaws.com:8080/displayData", function(data){
	var otherData = data;
	for(var i=0; i<6; i++){
		var targetMon = '#moneyNo' + i;
		var targetPick =  '#pickNo' + i;
		var payloadMon = otherData[i].money.toString();
		var payloadPick = otherData[i].picks.toString();
		$(targetMon).html(payloadMon);
		$(targetPick).html(payloadPick);
	}
});
var widthHolder = ((document.body.clientWidth - 35) / 6);
$(".statBlock").css("width", widthHolder);
$(".statBlock").css("max-width", widthHolder);

/*handler to collapse the stat boxes but keeps
the top part to use as a key for the graphs*/
var win = $(window);
win.on('scroll', function(){
	var h = win.scrollTop();
	if(h < 120){
		$('.banner').show();
		$('.hider').show();
		$(".statBlock").animate({
			height : 230
		},10);
		$('.collapser').show('fast');
		$('.wrapper').css('position', 'relative');
		$('.content:first').css('margin-top', '0px');
		$('.content:first').css('padding-top', '0px');
	}else if(h >= 120){
		$('.collapser').hide('fast');
		$(".statBlock").animate({
			height : 155
		},10);

		$('.wrapper').css('position', 'fixed');
		$('.wrapper').css('top', '0px');
		$('.content:first').css('margin-top', '155px');
		$('.content:first').css('padding-top', '100px');
		$(".statBlock").css("position", "relative");
	}
});

	const g1 = {
		svgSel: "#svg1",
		yLab: "Picks Correct ",
		ajaxUrl: "http://ec2-34-229-105-41.compute-1.amazonaws.com:8080/pickData",
		vName: "Picks"
	};

	const g2 = {
		svgSel: "#svg2",
		yLab: "Points ",
		ajaxUrl: "http://ec2-34-229-105-41.compute-1.amazonaws.com:8080/moneyData",
		vName: "Money"
	};

function drawGraph(svgSel, yLab, ajaxUrl, vName){
	var parseTime = d3.timeParse("%Y%m%d");
	//select the svg
	var svg = d3.select(svgSel),
		margin = {top: 20, right: 50, bottom: 30, left: 50},
		width = 1000 - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	//define the lines
	var valueline0 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Alex); });
	var valueline1 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Amanda); });
	var valueline2 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Antonio); });
	var valueline3 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Morgan); });
	var valueline4 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Nick); });
	var valueline5 = d3.line()
		.curve(d3.curveBasis)
		.x(function(d) { return x(d.Date); })
		.y(function(d) { return y(d.Will); });

	function draw(data, num) {
		var data = data[num];

		//format the data
		data.forEach(function(d) {
			d.Date = parseTime(d.Date);
			d.Alex = +d.Alex;
			d.Amanda = +d.Amanda;
			d.Antonio = +d.Antonio;
			d.Morgan = +d.Morgan;
			d.Nick = +d.Nick;
			d.Will = +d.Will;
		});
	    //scale the range of the data
		x.domain(d3.extent(data, function(d) { return d.Date; }));
		y.domain([d3.min(data, function(d) {
			return Math.min(d.Alex, d.Amanda, d.Antonio, d.Morgan, d.Nick, d.Will); }), d3.max(data, function(d) {
			return Math.max(d.Alex, d.Amanda, d.Antonio, d.Morgan, d.Nick, d.Will); })]);
	
		//add the valueline path.
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line0")
			.attr("d", valueline0);
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line1")
			.attr("d", valueline1);
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line2")
			.attr("d", valueline2);
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line3")
			.attr("d", valueline3);
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line4")
			.attr("d", valueline4);
		g.append("path")
			.data([data])
			.attr("class", "line")
			.attr("id", "line5")
			.attr("d", valueline5);
		//add the xAxis
		g.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
	
		//add the yAxis
		g.append("g")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("fill", "#000")
			.attr("font-size", "11px")
			.text(yLab);
	}
	//get the data
	d3.json(ajaxUrl, function(error, data) {
		if (error) throw error;
	
		//trigger render
		draw(data, vName);
	});
	//draw xAxis
	function make_x_gridlines() {
		return d3.axisBottom(x)
		.ticks(6)
	}
	//draw yAxis
	function make_y_gridlines() {
		return d3.axisLeft(y)
			.ticks(4)
	}

	g.append("g")
		.attr("class", "grid")
		.attr("transform", "translate(0," + height + ")")
		.call(make_x_gridlines()
			.tickSize(-height)
			.tickFormat(""));


	 g.append("g")
		.attr("class", "grid")
		.call(make_y_gridlines()
			.tickSize((-width))
			.tickFormat(""));
}

drawGraph(g1.svgSel, g1.yLab, g1.ajaxUrl, g1.vName);
drawGraph(g2.svgSel, g2.yLab, g2.ajaxUrl, g2.vName);

$("#linkedin").click(function(){
	var win1 = window.open("https://www.linkedin.com/in/alex-irizarry-166383149/", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
});
$("#stackO").click(function(){
	var win1 = window.open("https://stackoverflow.com/users/8805192/alex-i?tab=profile", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
});
$("#gHub").click(function(){
	var win1 = window.open("https://github.com/irizarryam5", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
});
$("#linker").click(function(){
	var win1 = window.open("https://projects.fivethirtyeight.com/2018-nba-predictions/", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
});
