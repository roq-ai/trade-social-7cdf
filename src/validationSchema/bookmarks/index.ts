import * as yup from 'yup';

export const bookmarkValidationSchema = yup.object().shape({
  post_id: yup.string(),
  user_id: yup.string().nullable(),
});
