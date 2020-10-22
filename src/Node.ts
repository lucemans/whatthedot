import { GraphStyle, GraphStylePresets } from "./Style";
import Graph from "./Graph";
import {cloneDeep} from "lodash";

export enum NodeShape {
    elipse="elipse", box="box", circle="circle", record="record", plaintext="plaintext"
}

export interface NodeProperties {
    shape: NodeShape;
    width: number;
    height: number;
    label: string;
}

let defaultNodeProps: NodeProperties = {
    label: '',
    shape: NodeShape.elipse,
    width: 0.75,
    height: 0.5,
}
export default class Node {
    id: string;
    props: NodeProperties;
    _goto: Node[] = [];
    graph: Graph;

    constructor(label: string, props: NodeProperties = defaultNodeProps) {
        this.id = "-1";

        this._goto = [];

        this.props = cloneDeep(props);
        this.props.label = label;
    }

    /* Settings */
    goesTo(...node: Node[]) {
        node.forEach((node) => {
            this._goto.push(node);
        });
    }

    /* SERIALIZATION */
    getGoto(): string[] {
        const interject = this.getStyle().connection_line;
        return this._goto.map(to => this.id + interject + to.id);
    }

    getInitializer() {
        const style = this.getStyle();

        let props = {};
        Object.keys(this.props).filter(a => {
            return this.props[a] != defaultNodeProps[a];
        }).forEach(a => {
            props[a] = this.props[a];
        });

        const propsArray = Object.keys(props)
            .map(a => style.node_prop
                .replace('$key', a)
                .replace('$value', props[a].includes(' ') ? '"' + props[a] + '"' : props[a]));

        return style.node_initializer.replace('$id', this.id).replace('$props', propsArray.join(style.node_prop_delim));
    }

    getStyle(): GraphStyle {
        return this.graph ? this.graph.style : GraphStylePresets.clean;
    }
}