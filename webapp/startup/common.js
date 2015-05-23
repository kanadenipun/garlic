FileStore = new FS.Store.FileSystem("Downloadfiles", {
  path: "~/uploads", //optional, default is "/cfs/files" path within app container
  /*transformWrite: myTransformWriteFunction, //optional
  transformRead: myTransformReadFunction, //optional*/
  maxTries: 5 //optional, default 5
});

Fls = new FS.Collection("fls", {
  stores: [FileStore]
});

/*var imageStore = new FS.Store.FileSystem("images", {
  path: "~/app-files/images", //optional, default is "/cfs/files" path within app container
  transformWrite: myTransformWriteFunction, //optional
  transformRead: myTransformReadFunction, //optional
  maxTries: 1 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});*/