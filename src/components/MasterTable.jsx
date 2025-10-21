import React, { useEffect, useState } from 'react';
import { getMasters, deleteMaster } from '../api';
import { getMedbookStatus, statusColor } from '../utils';
import { Button, TableContainer } from '../styles';

const MasterTable = ({ onEdit }) => {
  const [masters, setMasters] = useState([]);
  const [search, setSearch] = useState('');

  const loadMasters = async () => {
    const { data } = await getMasters();
    setMasters(data);
  };

  useEffect(() => { loadMasters(); }, []);

  const handleDelete = async (id) => {
    await deleteMaster(id);
    loadMasters();
  };

  const filtered = masters.filter(m =>
    m.full_name.toLowerCase().includes(search.toLowerCase()) ||
    m.telegram_nick?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <input
          placeholder="Поиск по ФИО или Telegram..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '8px 12px', width: '300px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
        <Button onClick={() => onEdit(null)}>➕ Добавить</Button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#fafafa' }}>
          <tr>
            <th>ФИО</th>
            <th>Telegram</th>
            <th>Телефон</th>
            <th>Роли</th>
            <th>Медкнижка</th>
            <th>Примечания</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(m => {
            const status = getMedbookStatus(m.medbook_expiry);
            return (
              <tr key={m.id} style={{ background: statusColor[status] }}>
                <td>{m.full_name}</td>
                <td>{m.telegram_nick}</td>
                <td>{m.phone}</td>
                <td>{Array.isArray(m.roles) ? m.roles.join(', ') : m.roles}</td>
                <td>{m.medbook_expiry || '-'}</td>
                <td>{m.notes}</td>
                <td>
                  <Button onClick={() => onEdit(m)}>✏️</Button>{' '}
                  <Button onClick={() => handleDelete(m.id)} style={{ background: '#ff6b6b' }}>🗑️</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default MasterTable;
