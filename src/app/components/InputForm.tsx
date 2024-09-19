import React, { useState, CSSProperties } from 'react';

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

  const styles: { [key: string]: CSSProperties } = {
    table: {
      width: '100%',
      marginBottom: '20px',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#f0f0f0',
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    input: {
      width: '100%',
      padding: '5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: 'white',
      color: 'black',
    },
    button: {
      padding: '5px 10px',
      backgroundColor: '#0074D9',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '5px',
    },
    deleteButton: {
      backgroundColor: '#FF4136',
    },
    addButton: {
      display: 'block',
      marginBottom: '20px',
    },
    submitButton: {
      backgroundColor: '#2ECC40',
      padding: '10px 20px',
      fontSize: '16px',
    },
    section: {
      marginBottom: '40px',
    },
  };

  return (
    <div>
      <div style={styles.section}>
        <h2 style={{ marginBottom: '20px' }}>Nodes</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Node ID</th>
              <th style={styles.th}>Node Label</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  <input
                    style={styles.input}
                    value={node.id}
                    onChange={(e) => handleNodeChange(index, 'id', e.target.value)}
                    placeholder="Node ID"
                  />
                </td>
                <td style={styles.td}>
                  <input
                    style={styles.input}
                    value={node.label}
                    onChange={(e) => handleNodeChange(index, 'label', e.target.value)}
                    placeholder="Node Label"
                  />
                </td>
                <td style={styles.td}>
                  <button 
                    style={{...styles.button, ...styles.deleteButton}}
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
          style={{...styles.button, ...styles.addButton}}
          onClick={addNode}
        >
          Add Node
        </button>
      </div>

      <div style={styles.section}>
        <h2 style={{ marginBottom: '20px' }}>Edges</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Source ID</th>
              <th style={styles.th}>Target ID</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {edges.map((edge, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  <input
                    style={styles.input}
                    value={edge.source}
                    onChange={(e) => handleEdgeChange(index, 'source', e.target.value)}
                    placeholder="Source ID"
                  />
                </td>
                <td style={styles.td}>
                  <input
                    style={styles.input}
                    value={edge.target}
                    onChange={(e) => handleEdgeChange(index, 'target', e.target.value)}
                    placeholder="Target ID"
                  />
                </td>
                <td style={styles.td}>
                  <button 
                    style={{...styles.button, ...styles.deleteButton}}
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
          style={{...styles.button, ...styles.addButton}}
          onClick={addEdge}
        >
          Add Edge
        </button>
      </div>

      <button 
        style={{...styles.button, ...styles.submitButton}}
        onClick={handleSubmit}
      >
        Generate Graph
      </button>

      <div style={styles.section}>
        <h2 style={{ marginBottom: '20px' }}>Visualization</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Node ID</th>
              <th style={styles.th}>Node Label</th>
              <th style={styles.th}>Connected To</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node) => (
              <tr key={node.id}>
                <td style={styles.td}>{node.id}</td>
                <td style={styles.td}>{node.label}</td>
                <td style={styles.td}>
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