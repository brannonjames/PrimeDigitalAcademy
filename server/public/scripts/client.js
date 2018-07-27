class Calculation{
  constructor( xIn, yIn, operatorIn ){
    this.x = xIn;
    this.y = yIn;
    this.operator = operatorIn;
  } //end constructor
} // end class

let xString ='';
let yString = '';
let operator = '';

// APP FUNCTIONS

function updateDisplay(num){
  const $display = $('#display');
  $display.val(num);
}

function clearCalc(){
  xString = '';
  yString = '';
  operator = '';
  $('.operator').removeClass('selected');
  updateDisplay('0');
}

function renderHistoryListItem(obj){
  const $historyList = $('#history-list');
  let $button = $('<button></button>')
    .addClass('history-button')
    .data('answer', obj.answer)
    .text(obj.calculation)
    .on('click', handleHistoryClick);
  $historyList.append($button);  
}

function errorHandler(error){
  updateDisplay(`Err ${error.status || 500}`);
  console.log(error.responseText);
}

// AJAX STUFF

function postCalc(data){
  return $.post('/calculate', data);
}

function getHistory(limit=8){
  return $.get(`/history?limit=${limit}`);
}

function deleteHistory(){
  return $.ajax({
    url: '/history',
    method: 'DELETE'
  });
}

function updateHistory(){
  getHistory()
    .done(function(res){
      const $historyList = $('#history-list');
      $historyList.empty();
      for(let obj of res){
        renderHistoryListItem(obj);
      }
    })
    .fail(function(err){
      errorHandler(err);
    })
}

// CLICK HANDLERS


function handleSubmit(clear=true){
  if(yString.length > 0){
    let calc = new Calculation(xString, yString, operator);
  
    postCalc(calc)
      .done(function(res){
        clear ? clearCalc() : null;
        xString = res.toString();
        updateDisplay(res);
        updateHistory();
      })
      .fail(function(err){
        errorHandler(err);
      })
    }     
}

function handleNumberClick(){
  let num = $(this).attr('id');

  // if an operator is selected start typing out y value
  if(operator.length < 1 && xString.length < 7){
    xString += num;
    updateDisplay(xString);
  } else if(operator.length > 1 && yString.length < 7){
    yString += num;
    $('.operator').removeClass('selected');
    updateDisplay(yString);

  }
}

function handleOperatorClick(){
  let $operatorBtn = $(this)
  if(yString.length > 0){
    handleSubmit(false);
    operator = $operatorBtn.attr('id');
    yString='';
  }
  if(xString.length > 0){
    operator = $operatorBtn.attr('id');
  
    // removes all selected class from ALL operators, then adds to click one
    $('.operator').removeClass('selected');
    $operatorBtn.addClass('selected');
  }
}

function handleHistoryClick(){
  const answer = $(this).data('answer');
  updateDisplay(answer);
  xString = answer.toString();
}


function handleDelete(){
  const $historyList = $('#history-list');

  // only send DELETE request if
  // there's already history
  if($historyList.children().length){
    deleteHistory()
    .done(function(res){
      clearCalc();
      updateDisplay(res);
      $historyList.empty();
    })
    .fail(function(err){
      updateDisplay(`Error ${err.status || 500}`);
    })
  }
}

// ON LOAD STUFF

function addEventListeners(){
  $('.number').on('click', handleNumberClick);
  $('.operator').on('click', handleOperatorClick);
  $('#clear').on('click', clearCalc);
  $('#equals').on('click', handleSubmit);
  $('#delete').on('click', handleDelete);
}

function readyNow(){
  addEventListeners();
  updateHistory();
} //end readyNow

$( document ).ready( readyNow );
