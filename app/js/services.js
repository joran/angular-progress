'use strict';

/* Services */
'use strict';

/* Services */

angular.module('myApp.services', [])
  .value('version', '0.1')
  .service('ProgressService', function(){
      var hs = {
	  	  'a1': {headers: ['Name', 'Pnr', 'Score', 'Moment 1', 'Moment 2', 'Moment 3']},
	  	  'a2': {headers: ['-Name-', 'Pnr', 'Score', 'Moment 1', 'Moment 2', 'Moment 3']}
	  };
	  this.get = function(id){
	      console.log("----", id, hs[id]);
	      return hs[id];
	  }
  });
;