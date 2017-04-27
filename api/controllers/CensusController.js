/**
 * CensusController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // find1 will work, onhly 1 instance w/ more than 1 criteria is last
  find1: function (req, res) {
    return Census.find({
      or: [
        {"lastName": "marshall", "middleName": "adam"},
        {"firstName": "robin"},
        //{"lastName": "fredrickson","middleName": "beth"},
        //{"middleName": "richard"}
      ]
    })
    .then(function censusFind(censusResults) {
      sails.log(censusResults);
      return res.ok(censusResults);
    })
    .catch(function censusFindErr(err) {
      sails.log(err);
      return res.serverError(err);
    });
  },

  // find2 will work, 2nd instance w/ more than 1 criteria is last
  find2: function (req, res) {
    return Census.find({
      or: [
        {"lastName": "marshall", "middleName": "adam"},
        {"firstName": "robin"},
        {"lastName": "fredrickson","middleName": "beth"},
        //{"middleName": "richard"}
      ]
    })
    .then(function censusFind(censusResults) {
      sails.log(censusResults);
      return res.ok(censusResults);
    })
    .catch(function censusFindErr(err) {
      sails.log(err);
      return res.serverError(err);
    });
  },

  // find3 will not work, 2nd instance with more than 1 criteria IS NOT last
  // log for this specific call will show:
  // TypeError: The operator "beth" is not permitted
  // Generalized, the error will be :
  // TypeError: The operator "[LAST VALUE OF 2nd INSTANCE W/ MORE THAN 1 CRITERIA]" is not permitted
  find3: function (req, res) {
    return Census.find({
      or: [
        {"lastName": "marshall", "middleName": "adam"},
        {"firstName": "robin"},
        {"lastName": "fredrickson","middleName": "beth"},
        {"middleName": "richard"}
      ]
    })
    .then(function censusFind(censusResults) {
      sails.log(censusResults);
      return res.ok(censusResults);
    })
    .catch(function censusFindErr(err) {
      sails.log(err);
      return res.serverError(err);
    });
  },
};
