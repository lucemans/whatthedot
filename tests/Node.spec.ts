import Graph from '../src/Graph';
import Node, { NodeShape } from '../src/Node';

describe('Initializers', () => {
    test('Simple Label', () => {
        const graph = new Graph('1');
        const n = new Node("label");
        graph.add(n);

        expect(n.getInitializer()).toEqual('0 [label = label]');
    });

    test('Box Shape', () => {
        const graph = new Graph("1");
        const n = new Node("label", {shape: NodeShape.box});
        graph.add(n);
        expect(n.getInitializer()).toEqual('0 [label = label, shape = box]');
    });

    test('Custom Width', () => {
        const graph = new Graph("1");
        const n = new Node("label", {width: 2});
        graph.add(n);
        expect(n.getInitializer()).toEqual('0 [label = label, width = 2]');
    });

    test('Custom Width < 1', () => {
        const graph = new Graph("1");
        const n = new Node("label", {width: 0.5});
        graph.add(n);
        expect(n.getInitializer()).toEqual('0 [label = label, width = .5]');
    });

    test('Custom Width Default Value', () => {
        const graph = new Graph("1");
        const n = new Node("label", {width: 0.75});
        graph.add(n);
        expect(n.getInitializer()).toEqual('0 [label = label]');
    });
});

describe('Node Linking', () => {

    test('Simple One-Directional', () => {
        const graph = new Graph('1');
        const a = new Node('a');
        const b = new Node('b');
        graph.add(a);
        graph.add(b);
        a.goesTo(b);
        expect(a.getGoto()).toEqual(['0 -> 1']);
    });

    test('Simple Multi-Directional', () => {
        const graph = new Graph('1');
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        graph.add(a);
        graph.add(b);
        graph.add(c);
        a.goesTo(b);
        a.goesTo(c);
        expect(a.getGoto()).toEqual(['0 -> 1','0 -> 2']);
    });
});