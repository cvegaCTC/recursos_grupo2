/*
url:  https://corona-api.com/countries
*/

function getAllCountries() {
    $.ajax({
        type: 'GET',
        url: ' https://corona-api.com/countries',
        dataType: 'json',
        async: true,
        success: function (jsonData) {renderAllCountries(jsonData.data)},
        error: function() {errorMessage()},
    });
}

function renderAllCountries(data) {
    /*
    OPCIÓN 1
    for (let i = 0; i < data.length; i++) {
        $("#countries").append(
            `<option value="${data[i].code}">${data[i].name}</option>`
        );
    }
    */
   data.forEach(element => {
    $("#countries").append(
        `<option value="${element.code}">${element.name}</option>`
    );
   });
}

function getCountryInfo(countryCode, timeSpan) {
    $.ajax({
        type: 'GET',
        url: `https://corona-api.com/countries/${countryCode}`,
        dataType: 'json',
        async: true,
        success: function (jsonData) {renderCountryData(jsonData.data, timeSpan)},
        error: function() {errorMessage()},
    });
}

function renderCountryData(data, timeSpan) {
    // CanvasJS
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: `Casos COVID-19 en ${data.name}`
        },
        data: [{        
            type: "line",
            indexLabelFontSize: 16,
            showInLegend: true,
            legendText: "Nuevos casos",
            dataPoints: createArr(data, timeSpan)[0],
        },
        {        
            type: "line",
            axisYType: "secondary",
            indexLabelFontSize: 16,
            showInLegend: true,
            legendText: "Nuevos fallecimientos",
            dataPoints: createArr(data, timeSpan)[1],
            
        }    
        ]
    });
    chart.render();
}

function createArr(data, timeSpan) {
    // Almacenamos la información del rango temporal (timeSpan) deseado.
    let timeline = [[], []];
    for (let i = 0; i < timeSpan; i++) {
        // Revisamos si hubo reporte ese día
        if (data.timeline[i].new_confirmed !== 0) {
            timeline[0].unshift({
                label: data.timeline[i].date,
                y: data.timeline[i].new_confirmed,
            })
        }

        if (data.timeline[i].new_deaths !== 0) {
            timeline[1].unshift({
                label: data.timeline[i].date,
                y: data.timeline[i].new_deaths,
            })
        }
    }
    return timeline;
}

function errorMessage() {
    alert("No se logró establecer conexión con la API.");
}

$(document).ready(function() {
    getAllCountries();

    $("#countries").on("change", function() {
        let selectedCountry = $("#countries option:selected").val();
        let timeSpan = $("#time-span option:selected").val();
        getCountryInfo(selectedCountry, timeSpan);
    })
});