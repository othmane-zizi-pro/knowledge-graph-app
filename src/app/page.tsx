// src/app/page.tsx

"use client";  // This makes it a Client Component

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
    <div>
      <h1>Knowledge Graph Generator</h1>
      <InputForm onSubmit={handleGenerateGraph} />
      <GraphComponent  />
    </div>
  );
}
