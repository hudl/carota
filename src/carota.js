
var node = require('./node');
var editor = require('./editor');
var doc = require('./doc');
var dom = require('./dom');
var runs = require('./runs');
var html = require('./html');
var frame = require('./frame');
var text = require('./text');
var rect = require('./rect');
 
var bundle = {
    node: node,
    editor: editor,
    document: doc,
    dom: dom,
    runs: runs,
    html: html,
    frame: frame,
    text: text,
    rect: rect
};

module.exports = bundle;
document.carota = bundle;

/**
 * This is a FAKE carota, enable it to build a test package
 */

// const doc = {
//     load: () => console.log("fake load"),
//     save: () => console.log("fake save"),
//     contentChanged: () => console.log("content changed"),
//     selectionChanged: () => console.log("selection changed"),
//     setZoomLevel: () => console.log("zoomLevel")
// }
// const bundle = {
//     editor: {
//         create: () => { console.log("fake create"); return doc; }
//     }the 
// }

// export default bundle;
