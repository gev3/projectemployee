import * as yup from 'yup';

export const validationRegister = yup.object().shape({
  image: yup.string(),
  first_name: yup.string().required('Required field'),
  last_name: yup.string().required('Required field'),
});
