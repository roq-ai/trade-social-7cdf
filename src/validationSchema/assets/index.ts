import * as yup from 'yup';

export const assetValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
});
