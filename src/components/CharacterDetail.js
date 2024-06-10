// src/components/CharacterDetail.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacterDetail } from '../slices/starWarsSlice';
import { Card, Spin } from 'antd';

const CharacterDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.starWars.characterDetail);
  const status = useSelector((state) => state.starWars.status);

  useEffect(() => {
    dispatch(fetchCharacterDetail(name));
  }, [dispatch, name]);

  if (status === 'loading') return <Spin />;
  if (!character) return <div>Character not found</div>;

  return (
    <Card title={character.name} className="max-w-md mx-auto mt-10">
      <p><strong>Height:</strong> {character.height}</p>
      <p><strong>Mass:</strong> {character.mass}</p>
      <p><strong>Hair Color:</strong> {character.hair_color}</p>
      <p><strong>Skin Color:</strong> {character.skin_color}</p>
      <p><strong>Eye Color:</strong> {character.eye_color}</p>
      <p><strong>Birth Year:</strong> {character.birth_year}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
    </Card>
  );
};

export default CharacterDetail;
