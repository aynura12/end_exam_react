import * as yup from 'yup';

export const formSchema = yup
  .object()
  .shape({
    name: yup.string("pls enter tring type word").required("dont must required"),
    age: yup.number("pls enter nubber type word").required("dont mus required").positive().integer(),
  })
  .required();