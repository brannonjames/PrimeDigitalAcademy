class Car{
  constructor(year, make, model, img, id){
    this.id = id;
    this.year = year;
    this.make = make;
    this.model = model;
    this.img = img
  } //end constructor

  createListItem(){
    let {year, make, model, img, id} = this;
    let $year = $('<li></li>').text(year);
    let $make = $('<li></li>').text(make);
    let $model = $('<li></li>').text(model);
    let $info = $('<ul></ul>').append($year, $make, $model);
    let $delete = $('<button>Delete</button>').attr('data-id', id).addClass('deleteButton');
    let $img = $('<img />').attr({'src': img, 'alt': model});
    return $('<li></li>').attr('data-id', id).append($delete, $img, $info);
  }

  static render(...cars){
    cars.forEach(car => {
      $('#carList').prepend(car.createListItem());
    })
  }

} // end Car class

let garage = [];
let garageCapacity = 4;

//initial cars
newCar('2016', 'Chevy', 'Volt', 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q2/667349/2017-chevrolet-volt-premier-test-review-car-and-driver-photo-669104-s-original.jpg');
newCar('2018', 'Lamborghini', 'Aventador', 'https://2-photos7.motorcar.com/new-2018-lamborghini-aventador-showcar-8868-16805712-8-1024.jpg');


function newCar(year, make, model, img){
  let id = String(Math.floor(Math.random() * 9999) * year);
  let car = new Car(...arguments, id);
  garage.unshift(car);
  Car.render(car);
  updateHeader();
  return true;
} // end newCar

function submitForm(event){
  event.preventDefault();
  if(garage.length < garageCapacity){
    let make = $('#make').val();
    let model = $('#model').val();
    let year = $('#year').val();
    let img = $('#img').val();
    newCar(year, make, model, img);
    this.reset();
  } else {
    alert('Garage is at capacity :(')
  }
}

function deleteCar(id){
  garage = garage.filter(car => (
    car.id !== id
  ));
  $(`li[data-id='${id}']`).remove();
  updateHeader();
}

function updateHeader(){
  let spotsRemaining = garageCapacity - garage.length;
  $('#capacity').text(`${spotsRemaining} spots remaining`);
  if(spotsRemaining < 1){
    $('form input').prop('disabled', true).css('background-color', '#aaa');
    $('form button').prop('disabled', true).css('background-color', '#aaa');
    $('#capacity').css('color', 'red');
  } else {
    $('form input').prop('disabled', false).css('background-color', 'white');
    $('form button').prop('disabled', false).css('background-color', 'white');
    $('#capacity').css('color', 'white');
  }
}


$(document).ready(function(){
  updateHeader();
  $('form').on('submit', submitForm);
  $('ul').on('click', 'button.deleteButton', function(e){
    deleteCar(e.target.dataset.id);
  });
  Car.render(...garage);
})
