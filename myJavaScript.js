$(function () {
    console.log("ready!");
    $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $.each(data.results, function (key, person) {
                // console.log(person.gender)
                $('#random').append(`<div class="col-md-2 text-center ${person.gender}">
                    <img src="${person.picture.large}" alt="" class="img-fluid rounded-circle">
                    <h4>${person.name.first} ${person.name.last}</h4>
                    <p> <span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                    <i class="fab fa-whatsapp"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter mb-3"></i>  
                </div>`);

                $('#random2').append(`<div class="col-md-2 text-center ${person.gender}">
                <img src="${person.picture.large}" alt="" class="img-fluid rounded-circle">
                <h4>${person.name.first} ${person.name.last}</h4>
                <p> <span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter mb-3"></i>  
            </div>`);
            })
        }

    });

});







