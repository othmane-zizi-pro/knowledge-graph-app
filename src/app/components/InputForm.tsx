import { useState } from 'react';

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
  const [nodeId, setNodeId] = useState<string>('');
  const [nodeLabel, setNodeLabel] = useState<string>('');
  const [nodes, setNodes] = useState<Node[]>([]);

  const [sourceId, setSourceId] = useState<string>('');
  const [targetId, setTargetId] = useState<string>('');
  const [edges, setEdges] = useState<Edge[]>([]);

  const handleAddNode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNodes([...nodes, { id: nodeId, label: nodeLabel }]);
    setNodeId('');
    setNodeLabel('');
  };

  const handleAddEdge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEdges([...edges, { source: sourceId, target: targetId }]);
    setSourceId('');
    setTargetId('');
  };

  const handleSubmit = () => {
    onSubmit({ nodes, edges });
  };

  return (
    <div>
      <form onSubmit={handleAddNode}>
        <input
          value={nodeId}
          onChange={(e) => setNodeId(e.target.value)}
          placeholder="Node ID"
        />
        <input
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
          placeholder="Node Label"
        />
        <button type="submit">Add Node</button>
      </form>

      <form onSubmit={handleAddEdge}>
        <input
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
          placeholder="Source Node ID"
        />
        <input
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
          placeholder="Target Node ID"
        />
        <button type="submit">Add Edge</button>
      </form>

      <button onClick={handleSubmit}>Generate Graph</button>
    </div>
  );
};

export default InputForm;
