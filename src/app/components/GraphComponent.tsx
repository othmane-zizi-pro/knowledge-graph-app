"use client";

import { useEffect, useState } from 'react';
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
  const [cyInstance, setCyInstance] = useState<cytoscape.Core | null>(null);

  useEffect(() => {
    if (!document.getElementById('cy')) return;

    if (cyInstance) {
      cyInstance.destroy(); // Clean up previous instance before creating a new one
    }

    const elements: ElementsDefinition = {
      nodes: data.nodes.map((node) => ({
        data: { id: node.id, label: node.label },
      })),
      edges: data.edges.map((edge) => ({
        data: { source: edge.source, target: edge.target },
      })),
    };

    const cy = cytoscape({
      container: document.getElementById('cy'), // Ensure container exists
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#0074D9',
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': 12,
            'width': 40,
            'height': 40,
            'overlay-padding': 6,
            'overlay-opacity': 0,
            'transition-property': 'background-color, width, height',
            'transition-duration': 500,
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 4,
            'line-color': '#ddd',
            'target-arrow-color': '#ddd',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 1.5,
          },
        },
      ],
      layout: {
        name: 'cose',
        animate: true,
        animationDuration: 750,
        fit: true,
        padding: 50,
      },
    });

    // Handle hover effects using events
    cy.on('mouseover', 'node', (event) => {
      const node = event.target;
      node.style({
        'background-color': '#FF4136',
        'width': 50,
        'height': 50,
      });
    });

    cy.on('mouseout', 'node', (event) => {
      const node = event.target;
      node.style({
        'background-color': '#0074D9',
        'width': 40,
        'height': 40,
      });
    });

    setCyInstance(cy); // Keep track of the Cytoscape instance

    return () => {
      if (cyInstance) {
        cyInstance.destroy(); // Clean up Cytoscape instance on unmount
      }
    };
  }, [data]);

  return (
    <div
      id="cy"
      style={{
        width: '100%',
        height: '100vh',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    ></div>
  );
};

export default GraphComponent;