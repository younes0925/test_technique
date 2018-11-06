
var chorus = 'Because I\'m happy. ';

var tab = [];

/** 
 * to init our table
 * @param {table of strings} tab the messages
 * @param {number} nbr the number of messages
*/
initTab = function(tab , nbr , ){
    for (var i = 0 ;i< nbr ; i++){
        tab.push('Chorus lyrics for "Happy": '.repeat(i))
    }
}

/** 
 *  get messages that have under of 50 characters 
 * @param {table of strings} tab the messages
 * @return {table of strings} new_tab the have  messages contain under of 50 characters
*/
get_msg_under_50 = function(tab ){

  var len = tab.length ;
  var new_tab = [];
  while(len >0){
    if(tab[len - 1].length<50)
      new_tab.push(tab[len - 1]);
    len--;
  }
  return new_tab;
}


/** 
 * to make test 
*/

initTab(tab , 5 , chorus);
console.log(tab.length)
var i = get_msg_under_50(tab);
console.log(i.length);