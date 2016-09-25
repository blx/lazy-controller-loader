module.exports = function() {
    this.cacheable();

    return "module.exports = ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) { " +
        "var deferred = $q.defer(); " +
        "require.ensure([], function(require) { " +
        "  var mod = require('" + this.resourcePath + "');" +
        "  $ocLazyLoad.load({name: mod.name});" +
        "  deferred.resolve(mod.controller);" +
        "})}]";
}
