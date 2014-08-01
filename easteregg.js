/**
 * This code is under MIT.
 * author: xy124
 *
 * this was mainly written to learn javascript, so feel free to post style issues...
 */

(function (easteregg, undefined) {
  'use strict';



  Array.prototype.randomSelect = function() {
    return this[Math.floor(Math.random()*this.length)];
  };

  // private helper functions:
  function randomColor() {
    return '#'+((1<<24)*Math.random()|0).toString(16);
  }

  function randomPhrase() {
    return [
      'Hey you\'re still here?','Are you stalking me?','42','beep beep','blup blup','knock knock','...','Hurry up','carpe diem'
    ].randomSelect();
  }

  function letTextFly(text, style) {
    var div = document.createElement('div'),
        x   = innerWidth / 2,
        y   = innerHeight / 2,
        flyingTextInterval = setInterval(function(){
          div.style.top = y + 'px';
          y -= 8*Math.sin((new Date()).getMilliseconds()/1000*6) + 5;
          if (y < -100) {
            clearInterval(flyingTextInterval);
            document.body.removeChild(div);
          }
        }, 40);

    div.innerHTML = text;

    for (var s in style) {
      div.style.setProperty(s, style[s]);
    }
    document.body.appendChild(div);


    div.style.left = x + 'px';

  }

////////////////////////////////////////////////////////////////////////////////
// insert eggs here!
  var eggs = [
    {
      id: 'addledEgg',
      // to format keystrokes, see http://namuol.github.io/cheet.js/
      keystroke: 'up up down down left right left right b a',
      action: function() {
        setInterval(function() {
          document.body.style.setProperty('color', randomColor());
        }, 5000);
      }
    },
    {
      id: 'addledEgg2',
      keystroke: 'up up down down left right left right a b',
      action: function() {
        setInterval(function() {
          document.body.style.setProperty('color', randomColor());
        }, 20);
      }
    },
    {
      id: 'jokeEgg',
      keystroke: 'a b c',
      action: function() {
        alert(randomPhrase());
      }
    },
    {
      id: 'pizza',
      keystroke: 'p i z z a',
      action: function() {
        letTextFly('+1000 food', {'color': 'red',
        'font-size':'24px', 'position': 'absolute',
        'font-family': 'Arial, Sans-Serif',
        'text-shadow': '#000000 3px 3px 5px'});
      }
    }
  ];



  // initialize eggs.
  eggs.forEach(function(egg){
    cheet(egg.keystroke, function() {
      console.log('ooops... EASTER TIME! (id:' + egg.id + ')');
      egg.action();
    });
  });

  /**
   * disables an ester egg
   * @param id string
   *   contains either the id or the keystroke of the egg to disable
   */
  easteregg.disable = function(id) {
    for (var i = 0; i < eggs.length; i++) {
      var egg = eggs[i];
      if (id === egg.id) {
        return cheet.disable(egg.keystroke);
      }
    }
    return cheet.disable(id);
  };

})(window.easteregg = window.easteregg || {});
