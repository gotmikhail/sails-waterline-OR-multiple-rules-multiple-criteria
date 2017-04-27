/**
 * Census.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    lastName: {
      type: 'string',
      maxLength: 32
    },
    firstName: {
      type: 'string',
      maxLength: 32
    },
    middleName: {
      type: 'string',
      maxLength: 32
    }
  },

};

