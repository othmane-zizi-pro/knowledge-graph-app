"use client";

import { useState } from 'react';
import InputForm from './components/InputForm';
import GraphComponent from './components/GraphComponent';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-12">
          <br></br><br></br>
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Your Knowledge Graph Generator
          </h1>
          <div className="max-w-2xl mx-auto mb-12">
            <InputForm onSubmit={handleGenerateGraph} />
          </div>
          <div className="mt-12">
            <GraphComponent data={graphData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}