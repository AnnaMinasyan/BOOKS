import { FormikErrors } from 'formik';

export interface AddBookFormValue {
  title?: string;
  author?: string;
  year_of_publication?: number;
}

export const initialAddBookFormValue: AddBookFormValue = {};

export const validateBook = (values: AddBookFormValue) => {
  const errors: FormikErrors<AddBookFormValue> = {};
  if (!values.title && !values.author && !values.year_of_publication) {
    errors.title = 'Please select value';
    errors.author = 'Please select value';
    errors.year_of_publication = 'Please select value';
  }
  return errors;
};
