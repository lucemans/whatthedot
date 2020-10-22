# WhAtThEdOt
A simple library for building dot (graphviz) files with javascript and typescript

# Aim
My primary aim for this project is to build something fun while learning DOT on the way.
And ofc just have fun with dot

# Examples
Below are some examples of fun stuff you can do with dot
## Ur average dot file
### Code
```dot
digraph figureName {
    name -> thing;
    thing -> name;
}
```
### Output:
![](./examples/basic.dot.svg)

## Example from the documentation
### Code
```dot
digraph G {
    main -> parse -> execute;
    main -> init;
    main -> cleanup;
    execute -> make_string;
    execute -> printf;
    init -> make_string;
    main -> printf;
    execute -> compare;
}
```
### Output:
![](./examples/docs.dot.svg)

# Export / Convert
Exporting can be done to `pdf` file format through the following command.
```shell
$ dot -Tpdf foo.dot -o foo.pdf
```

# Extension
Allows you to open preview of your graph to the side

# Links
| Description | Link |
| --------- | ---- |
| The dot documentation | https://graphviz.org/pdf/dotguide.pdf |
| VSCode Extension | https://marketplace.visualstudio.com/items?itemName=joaompinto.vscode-graphviz |