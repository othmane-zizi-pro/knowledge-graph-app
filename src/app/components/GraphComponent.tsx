import { useEffect } from 'react';
import cytoscape, { ElementsDefinition } from 'cytoscape';

interface Node {
  id: string;
  label: string;
}

interface Edge {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

interface GraphComponentProps {
  data: GraphData;
}

const GraphComponent: React.FC<GraphComponentProps> = ({ data }) => {
  useEffect(() => {
    const elements: ElementsDefinition = {
      nodes: data.nodes.map((node) => ({
        data: { id: node.id, label: node.label }
      })),
      edges: data.edges.map((edge) => ({
        data: { source: edge.source, target: edge.target }
      }))
    };

    const cy = cytoscape({
      container: document.getElementById('cy'), // container to render in
      elements,
      style: [
        { selector: 'node', style: { 'background-color': '#0074D9', 'label': 'data(label)' } },
        { selector: 'edge', style: { 'width': 3, 'line-color': '#ccc', 'target-arrow-color': '#ccc' } }
      ],
      layout: { name: 'grid', rows: 1 }
    });
  }, [data]);

  return <div id="cy" style={{ width: '800px', height: '600px' }}></div>;
};

export default GraphComponent;
