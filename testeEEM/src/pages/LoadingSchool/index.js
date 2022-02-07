import { useRoute } from '@react-navigation/native';
import React from 'react';
import LoadingComponent from '../../components/loading';

export default function LoadingSchool() {
  const route = useRoute();
  const { school } = route.params;

  return (
    <LoadingComponent image={school.urlLogoContexto} />
  );
}
