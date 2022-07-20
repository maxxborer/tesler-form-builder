exports.arrayFilterEmpty = (array) => array.filter((x) => !!x);

exports.pathRewrite = (localUrl, remoteUrl) => (path) =>
  path.replace(new RegExp(localUrl.replace("/", "\\/"), "g"), remoteUrl);
