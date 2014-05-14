'use strict';

/* Services */
'use strict';

/* Services */

angular.module('myApp.services', [])
  .value('version', '0.1')

  .service('ProgressService', function(){
	  var cp = angular.copy;
	  var ext = angular.extend;
      var cs = [{'status': 'Inlämnad', 'anotation': 'Ser bra ut....', 'modifiedBy': 'karlb', 'modifiedLast': '2014-04-15'},
	  	  	    {'status': 'Klar', 'anotation': 'Bra gjort!', 'modifiedBy': 'karlb', 'modifiedLast': '2014-04-15'},
				{'status': 'Rest', 'anotation': 'Behöver lämna in en rapport', 'modifiedBy': 'karlb', 'modifiedLast': '2014-04-20'}];
	  var ps = [{'name' : 'Andersson, Anna', 'pnr': '1234567890', 'score': '25%'},
	  	  	    {'name' : 'Björnsson, Björn', 'pnr': '1234567891', 'score': '25%'},
				{'name' : 'Carlsson, Cecila', 'pnr': '1234567892', 'score': '25%'}];
      var rows = [ext(cp(ps[0]), {'criterion': [cp(cs[0]), cp(cs[1]), cp(cs[2])]}),
	  	  	      ext(cp(ps[1]), {'criterion': [cp(cs[0]), cp(cs[1]), cp(cs[2])]}),
				  ext(cp(ps[2]), {'criterion': [cp(cs[0]), cp(cs[1]), cp(cs[2])]})];
      var hs = {
	  	  '1': {headers: ['Name', 'Pnr', 'Score', 'Moment 1', 'Moment 2', 'Moment 3'],
		  	   'forms':  [ cp(rows[0]), cp(rows[1]), cp(rows[2]), 
			   			   cp(rows[0]), cp(rows[1]), cp(rows[2]),
			   			   cp(rows[0]), cp(rows[1]), cp(rows[2]),
			   			   cp(rows[0]), cp(rows[1]), cp(rows[2]),
			   			   cp(rows[0]), cp(rows[1]), cp(rows[2]),
			   			   cp(rows[0]), cp(rows[1]), cp(rows[2]),
						   cp(rows[0]), cp(rows[1]), cp(rows[2])]},
	  	  '2': {headers: ['-Name-', 'Pnr', 'Score', 'Moment 1', 'Moment 2', 'Moment 3'],
		  	   'forms':  [cp(rows[0])]}
	  };
	  this.get = function(id){
	      return hs[id];
	  }

	  	  
  });
