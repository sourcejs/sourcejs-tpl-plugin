# SourceJS Plugin template

Demo of basic SourceJS Plugin structure. Read more about Plugin development in docs http://sourcejs.com/docs/api/plugins.

Compatible with [SourceJS](http://sourcejs.com) ~0.4.0.

To create new SourceJS Plugin, we recommend using our the official generator - https://github.com/sourcejs/generator-sourcejs.

## Plugin install instructions example

To install plugin, run npm command in `sourcejs/user` folder:

```
npm install sourcejs-tpl-plugin --save
```

Then run Grunt update in SourceJS root:

```
cd ..
grunt update
```

After restarting your app, plugin will be loaded automatically. To disable it, remove npm plugin and run `grunt update` again.

## More examples

* https://github.com/sourcejs/sourcejs-bubble
* https://github.com/sourcejs/sourcejs-spec-dependencies
* https://github.com/sourcejs/sourcejs-spec-status
* https://github.com/sourcejs/sourcejs-specs-linting