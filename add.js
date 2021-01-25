$('#countrySelect').html('');

 

$.each(result.data, function(index) {


    // I try to add connection to php file via ajax to your part of code here 
    // $.ajax({
    //     url: "php/ctr.php",
    //     type: 'POST',
    //     dataType: 'json',
    //     data: {
    //         country: $('#countrySelect').val()
    //     },
    //     success: function(result) {

    //         console.log(result);

    //         if (result.status.name == "ok") {

        //up to here
 

    $('#countrySelect').append($("<option>", {

        value: result.data[index].code,

        text: result.data[index].name


    })); 

 

}); 


