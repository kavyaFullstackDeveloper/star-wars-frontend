// src/components/CharacterList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../slices/starWarsSlice';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.starWars.characters);
  const status = useSelector((state) => state.starWars.status);
  const next = useSelector((state) => state.starWars.next);
  const previous = useSelector((state) => state.starWars.previous);

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading characters</div>;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Mass',
      dataIndex: 'mass',
      key: 'mass',
    },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) => (
        <Link to={`/characters/${record.name}`}>
          <Button type="primary">View Details</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={characters} columns={columns} rowKey="name" pagination={false} />
      <div className="flex justify-between mt-4">
        {previous && <Button onClick={() => dispatch(fetchCharacters(previous))}>Previous</Button>}
        {next && <Button onClick={() => dispatch(fetchCharacters(next))}>Next</Button>}
      </div>
    </div>
  );
};

export default CharacterList;
