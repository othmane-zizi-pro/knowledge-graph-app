import React, { useState } from 'react';

interface Node {
  id: string;
  label: string;
}

interface Edge {
  source: string;
  target: string;
}

interface InputFormProps {
  onSubmit: (data: { nodes: Node[]; edges: Edge[] }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const handleNodeChange = (index: number, field: keyof Node, value: string) => {
    const updatedNodes = [...nodes];
    updatedNodes[index][field] = value;
    setNodes(updatedNodes);
  };

  const handleEdgeChange = (index: number, field: keyof Edge, value: string) => {
    const updatedEdges = [...edges];
    updatedEdges[index][field] = value;
    setEdges(updatedEdges);
  };

  const addNode = () => {
    setNodes([...nodes, { id: '', label: '' }]);
  };

  const deleteNode = (index: number) => {
    const updatedNodes = [...nodes];
    updatedNodes.splice(index, 1);
    setNodes(updatedNodes);
  };

  const addEdge = () => {
    setEdges([...edges, { source: '', target: '' }]);
  };

  const deleteEdge = (index: number) => {
    const updatedEdges = [...edges];
    updatedEdges.splice(index, 1);
    setEdges(updatedEdges);
  };

  const handleSubmit = () => {
    onSubmit({ nodes, edges });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Nodes</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Node ID</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Node Label</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={node.id}
                    onChange={(e) => handleNodeChange(index, 'id', e.target.value)}
                    placeholder="Node ID"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={node.label}
                    onChange={(e) => handleNodeChange(index, 'label', e.target.value)}
                    placeholder="Node Label"
                  />
                </td>
                <td className="px-4 py-2">
                  <button 
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    onClick={() => deleteNode(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={addNode}
        >
          Add Node
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Edges</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Source ID</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Target ID</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {edges.map((edge, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={edge.source}
                    onChange={(e) => handleEdgeChange(index, 'source', e.target.value)}
                    placeholder="Source ID"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={edge.target}
                    onChange={(e) => handleEdgeChange(index, 'target', e.target.value)}
                    placeholder="Target ID"
                  />
                </td>
                <td className="px-4 py-2">
                  <button 
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    onClick={() => deleteEdge(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={addEdge}
        >
          Add Edge
        </button>
      </div>

      <button 
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-lg font-semibold"
        onClick={handleSubmit}
      >
        Generate Graph
      </button>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Visualization</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Node ID</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Node Label</th>
              <th className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">Connected To</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node) => (
              <tr key={node.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{node.id}</td>
                <td className="px-4 py-2">{node.label}</td>
                <td className="px-4 py-2">
                  {edges
                    .filter((edge) => edge.source === node.id || edge.target === node.id)
                    .map((edge) => (edge.source === node.id ? edge.target : edge.source))
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputForm;