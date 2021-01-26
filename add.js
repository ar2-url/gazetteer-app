$('#countrySelect').html('');

 

$.each(result.data, function(index) {

 

    $('#countrySelect').append($("<option>", {

        value: result.data[index].code,

        text: result.data[index].name


    })); 

 

}); 


