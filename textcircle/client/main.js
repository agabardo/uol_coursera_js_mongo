import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

this.Documents = new Mongo.Collection("documents");

if (Meteor.isServer){
  Meteor.startup(function(){
    if(!Documents.findOne()){
      Documents.insert({title:"New document"});
    }
  });
}

import './main.html';
