import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

import validUrl from 'valid-url';

Meteor.methods({
    'links.insert'(url) {
        console.log("Trying to save", url);
        //validUrl.isUri(url);
        check(url, Match.Where(url => validUrl.isUri(url)));

        //We are ready to save the URL
        const token = Math.random().toString(36).slice(-5);
        Links.insert(
            {
                url,
                token,
                clicks: 0
            }
        );
    }
});

export const Links = new Mongo.Collection('links');