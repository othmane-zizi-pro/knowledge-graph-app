"use client";

import { useState } from 'react';
import InputForm from './components/InputForm';
import GraphComponent from './components/GraphComponent';
import NavBar from './components/NavBar'; // Import the NavBar component
import './globals.css';

interface Node {
  id: string;
  label: string;
}

interface Edge {
  source: string;
  target: string;
}

export default function Home() {
  const [graphData, setGraphData] = useState<{ nodes: Node[]; edges: Edge[] }>({ nodes: [], edges: [] });

  const handleGenerateGraph = (data: { nodes: Node[]; edges: Edge[] }) => {
    setGraphData(data);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark min-h-screen">
      <NavBar /> {/* Add the NavBar component */}
      <div className="container mx-auto text-center p-8">
        <h1 className="text-3xl font-bold mb-8">Knowledge Graph Generator</h1>
        <InputForm onSubmit={handleGenerateGraph} />
        <div className="mt-10">
          <GraphComponent data={graphData} />
        </div>
      </div>
    </div>
  );
}
