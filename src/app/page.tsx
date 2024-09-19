"use client";

import { useState } from 'react';
import InputForm from './components/InputForm';
import GraphComponent from './components/GraphComponent';
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
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1>Knowledge Graph Generator</h1>
      <InputForm onSubmit={handleGenerateGraph} />
      <GraphComponent data={graphData} />
    </div>
  );
}