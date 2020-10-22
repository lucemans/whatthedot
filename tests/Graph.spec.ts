import { GraphStylePresets } from '../src/Style';
import Graph from '../src/Graph';
import Node from '../src/Node';

describe('Graph Core', () => {
    test('Basic Graph', () => {
        const graph = new Graph('1');
        expect(graph.serialize()).toEqual('digraph 1 {\n\n\n}');
    });
    test('Basic Graph 1 Node', () => {
        const graph = new Graph('1');
        const a = new Node('a');
        graph.add(a);
        expect(graph.serialize()).toEqual('digraph 1 {\n\t0 [label = a]\n}');
    });
    test('Basic Graph 2 Node', () => {
        const graph = new Graph('1');
        const a = new Node('a');
        const b = new Node('b');
        graph.add(a);
        graph.add(b);
        expect(graph.serialize()).toEqual('digraph 1 {\n\t0 [label = a]\n\t1 [label = b]\n}');
    });
});

describe('Connecections', () => {
    test('1 Connection', () => {
        const graph = new Graph('1');
        const a = new Node('a');
        const b = new Node('b');
        a.goesTo(b);
        graph.add(a);
        graph.add(b);
        expect(graph.serialize()).toEqual('digraph 1 {\n\t0 [label = a]\n\t1 [label = b]\n\t0 -> 1\n}')
    });
});

describe('Styles', () => {
    test('Clean Empty', () => {
        const graph = new Graph('1');
        graph.style = GraphStylePresets.minified;
        expect(graph.serialize()).toEqual('digraph 1{}');
    })
});