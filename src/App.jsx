import React, { useState } from 'react';
import MasterTable from './components/MasterTable';
import { Container, Title } from './styles';

function App() {
  const [editingMaster, setEditingMaster] = useState(null);

  return (
    <Container>
      <Title>База Мастеров 💼</Title>
      <MasterTable onEdit={setEditingMaster} />
      {/* Модалка добавления мастера появится здесь */}
    </Container>
  );
}

export default App;
