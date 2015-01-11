# SourceJS Plugin template

Demo of basic SourceJS Plugin structure.

Compatible with [SourceJS](http://sourcejs.com) ~0.4.0.

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