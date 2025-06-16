import { useState } from 'react';
import '../components/styles/who-is-playing.css';
import { Formik, Form } from 'formik';
import { Button, Card, Flex, Checkbox, Box, ScrollArea, Text } from '@radix-ui/themes';
import playerData from '../../players.json';
import { useNavigate } from 'react-router-dom';
import Selector from '../components/ui/Selector';

const WhoIsPlaying = ({ setPlayers }: { setPlayers: any }) => {
  return (
    <Selector setPlayers={setPlayers} />
  )
};

export default WhoIsPlaying;