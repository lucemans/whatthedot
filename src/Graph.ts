import Node from "./Node";
import { GraphStyle, GraphStylePresets } from "./Style";

export enum GraphType {
    GRAPH='graph', DIGRAPH='digraph'
}

export default class Graph {
    id: string;
    nodes: Node[] = [];
    type: GraphType = GraphType.DIGRAPH;
    style: GraphStyle = GraphStylePresets.clean;
    lastID = 0;

    constructor(id: string) {
        this.id = id;
    }

    add(n: Node) {
        this.nodes.push(n);
        n.graph = this;
        n.id = this.getNextID();
    }

    serialize() {
        let c = []
        .concat(this.nodes.map((a)=>{return a.getInitializer()}));
        
        this.nodes.map((a)=>{return a.getGoto()}).forEach((a) => {
            c = c.concat(a);
        });

        let _content = c.map(a=>this.style.content_pre+a).join(this.style.content_delim) || this.style.graph_empty;
        return this.style.graph_definition.replace('$graph', this.type.toString().toLowerCase()).replace('$id', this.id).replace('$content', _content == this.style.graph_empty ? this.style.graph_empty : this.style.content_wrap.replace('$content', _content));
    }

    getNextID(): string {
        this.lastID++;
        return (this.lastID-1).toString();
    }
}