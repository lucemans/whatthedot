import Graph from '../src/Graph';
import Node from '../src/Node';

describe('Initializers', () => {
    test('Simple Label', () => {
        const graph = new Graph('1');
        const n = new Node("label");
        graph.add(n);

        expect(n.getInitializer()).toBe('0 [label = label]');
    });

    test('Complex Colors', () => {
        // TODO:
        expect(true).toBe(true);
    })
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