/**
 * Created by vz on 3/21/15.
 */


(function(){

    console.log('\n--- Tightly Coupled Objects ---\n'+
    'what happens if we change names of methods of "polls" object?\n' +
    'we will break our code in "submit" and "view"');

    var polls = {
        data: [], // just for example
        add : function(poll){
            this.data.push(poll);
        },
        getList: function(callback){
            callback(this.data);
        }
    };

    var submit = {
        add: function(poll){
            polls.add(poll); // tightly coupled with polls
        }
    };

    var view = {
        init: function(){
            polls.getList(this.render); // tightly coupled with polls
        },
        render: function(list){
            list.forEach(function (poll) {
                console.log('rendered: ' + poll);
            });
        }
    };

    submit.add('Question 1');
    submit.add('Question 2');
    submit.add('Question 3');
    submit.add('Question 4');
    submit.add('Question 5');

    view.init();

})();


(function(){

    "use strict";

    console.log('\n--- Decoupling using bridge (contract) ---\n' +
    'The solution is to use a bridge object (contract) and inject it into "submit" and "view".\n' +
    'Now, if we make changes in "polls", we need to make changes only in "bridge" object');

    var polls = {
        data: [], // just for example
        addPolls : function(poll){
            this.data.push(poll);
        },
        getListOfPolls: function(callback){
            callback(this.data);
        }
    };

    var pollsBridge = {
        add: function(poll){
            polls.addPolls(poll);
        },
        getList: function(callback){
            polls.getListOfPolls(callback);
        }
    };

    var submit = {
        polls:{},
        init: function(polls){
            this.polls = polls;
        },
        add: function(poll){
            this.polls.add(poll);
        }
    };

    var view = {
        init: function(polls){
            this.polls = polls;
            this.polls.getList(this.render);
        },
        render: function(list){
            list.forEach(function (poll) {
                console.log('rendered: ' + poll);
            });
        }
    };

    submit.init(pollsBridge);
    submit.add('Question 1');
    submit.add('Question 2');
    submit.add('Question 3');
    submit.add('Question 4');
    submit.add('Question 5');

    view.init(pollsBridge);

})();

