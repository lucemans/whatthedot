export interface GraphStyle {
    graph_definition: string;
    graph_empty: string;
    content_wrap: string;
    content_delim: string;
    content_pre: string;
    node_initializer: string;
    node_prop: string;
    node_prop_delim: string;
    connection_line: string;
}

export const GraphStylePresets = {
    minified: {
        content_delim: ";",
        content_pre: "",
        content_wrap: "$content",
        graph_definition: "$graph $id{$content}",
        graph_empty: "",
        node_initializer: "$id[$props]",
        node_prop: "$key=$value",
        node_prop_delim: ",",
        connection_line: "$connection",
    },
    partial: {
        content_delim: "\n",
        content_pre: "\t",
        content_wrap: "\n$content\n",
        graph_definition: "$graph $id {$content}",
        graph_empty: "",
        node_initializer: "$id [$props]",
        node_prop: "$key=$value",
        node_prop_delim: ",",
        connection_line: "$connection",
    },
    clean: {
        content_delim: "\n",
        content_pre: "\t",
        content_wrap: "\n$content\n",
        graph_definition: "$graph $id {$content}",
        graph_empty: "\n\n\n",
        node_initializer: "$id [$props]",
        node_prop: "$key = $value",
        node_prop_delim: ", ",
        connection_line: " $connection ",
    }
}