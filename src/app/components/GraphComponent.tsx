"use client";

import { useEffect, useRef, useState } from 'react';
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
  const cyContainerRef = useRef<HTMLDivElement | null>(null);
  const [cyInstance, setCyInstance] = useState<cytoscape.Core | null>(null);

  useEffect(() => {
    if (!cyContainerRef.current) return;

    if (cyInstance) {
      cyInstance.destroy();
    }

    const elements: ElementsDefinition = {
      nodes: data.nodes.map((node) => ({
        data: { id: node.id, label: node.label },
      })),
      edges: data.edges.map((edge) => ({
        data: { source: edge.source, target: edge.target },
      })),
    };

    try {
      const cy = cytoscape({
        container: cyContainerRef.current,
        elements,
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#3b82f6', // Tailwind blue-500
              'label': 'data(label)',
              'color': '#ffffff',
              'text-valign': 'center',
              'text-halign': 'center',
              'font-size': 12,
              'width': 40,
              'height': 40,
              'overlay-padding': 6,
              'overlay-opacity': 0,
              'transition-property': 'background-color, width, height',
              'transition-duration': 300,
            },
          },
          {
            selector: 'edge',
            style: {
              'width': 2,
              'line-color': '#94a3b8', // Tailwind slate-400
              'target-arrow-color': '#94a3b8',
              'curve-style': 'bezier',
              'target-arrow-shape': 'triangle',
              'arrow-scale': 1.2,
            },
          },
        ],
        layout: {
          name: 'cose',
          animate: true,
          animationDuration: 500,
          fit: true,
          padding: 30,
        },
      });

      cy.on('mouseover', 'node', (event) => {
        const node = event.target;
        node.style({
          'background-color': '#ef4444', // Tailwind red-500
          'width': 50,
          'height': 50,
        });
      });

      cy.on('mouseout', 'node', (event) => {
        const node = event.target;
        node.style({
          'background-color': '#3b82f6', // Tailwind blue-500
          'width': 40,
          'height': 40,
        });
      });

      setCyInstance(cy);
    } catch (error) {
      console.error('Error initializing Cytoscape:', error);
    }

    return () => {
      if (cyInstance) {
        cyInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div
      ref={cyContainerRef}
      className="w-full h-[calc(100vh-16rem)] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
    ></div>
  );
};

export default GraphComponent;