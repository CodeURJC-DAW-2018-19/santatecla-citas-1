// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('main'));

var themes=[];
var ulThemes = document.getElementById("savedThemes");
var itemsThemes = ulThemes.getElementsByTagName("li");
for (var i = 0; i < itemsThemes.length; ++i) {
    themes.push(itemsThemes[i].textContent);
}

var nums=[];
var ulNums = document.getElementById("numQuotes");
var itemsNums = ulNums.getElementsByTagName("li");
for (var j = 0; j < itemsNums.length; ++j) {
    nums.push(itemsNums[j].textContent);
}

// specify chart configuration item and data
var option = {

    tooltip: {},

    legend: {
        data:['Citas por tema']
    },

    xAxis: {
        name: ["Tema"],
        data: themes
    },

    yAxis: {
        name: ["Nº citas"]
    },

    series: [{
        name: 'Citas por tema',
        type: 'bar',
        data: nums
    }]

};

// use configuration item and data specified to show chart
myChart.setOption(option);
