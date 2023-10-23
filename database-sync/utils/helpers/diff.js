"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiffNewDataArray = void 0;
/**
 * Return all data from `newData` that does not exists on `oldData`.
 * @param oldData
 * @param newData
 * @returns
 */
var getDiffNewDataArray = function (oldData, newData) {
    if (oldData === void 0) { oldData = []; }
    if (newData === void 0) { newData = []; }
    var diffData = [];
    var registerAlreadyExists = false;
    if (oldData.length === 0) {
        return newData;
    }
    for (var index = 0; index < newData.length; index++) {
        var currentNewData = newData[index];
        registerAlreadyExists = false;
        for (var index1 = 0; index1 < oldData.length; index1++) {
            var currentOldData = oldData[index1];
            if (currentOldData.id === currentNewData.id) {
                registerAlreadyExists = true;
            }
        }
        if (!registerAlreadyExists) {
            diffData.push(currentNewData);
        }
    }
    console.log("[DIFF] - Found " + diffData.length + " new registers");
    return diffData;
};
exports.getDiffNewDataArray = getDiffNewDataArray;
