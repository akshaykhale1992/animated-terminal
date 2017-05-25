$(function() {
  var data = [
    { 
      action: 'type',
      strings: ["Hello World!"],
      output: '&nbsp;',
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["My name is Akshay Khale"],
      output: '&nbsp;',
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["I am a "],
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["programmer",''],
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["developer",''],
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["coder",''],
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["magician"],
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: [" who can convert coffee into code ;)"],
      output : '&nbsp;',
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["and now you might be thinking this is so cool, I also want to create something like this"],
      clear : true,
      output : '&nbsp;',
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["For that you can checkout the original Codepen by SimoAmi at : "],
      output:"<a href='https://codepen.io/simoami/pen/zstvo' style='color:gray;'>codepen</a>",
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["Thank you!!!"],
      postDelay: 1000
    }
  ];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
              }
              $('section.terminal').scrollTop($('section.terminal').height());
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':
          break;
    }
}