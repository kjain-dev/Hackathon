import { useState } from 'react';
import {  set } from 'lodash';
import initialData from './data.json';

const Credentials = {
    username : "squad2",
    password : "123"
}

function useConfig() {
  const [settingsData, setDefaultSettings] = useState(initialData);

  const onChangeSettingsData = (key, value) => {
    set(settingsData, key, value);
    setDefaultSettings({ ...settingsData });
  };

  return {
    settingsData,
    onChangeSettingsData
  };
}
export { useConfig, Credentials };
