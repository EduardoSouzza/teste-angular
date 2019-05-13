"use strict";
exports.Inject = (obj) => {
    obj["isDeleted"] = { type: Boolean, default: false };
    obj["createdon"] = { type: Date, default: Date.now };
    obj["modifiedon"] = { type: Date, default: Date.now };
    obj["createdby"] = { type: String };
    obj["modifiedby"] = { type: String };
};
