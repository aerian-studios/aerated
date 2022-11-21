# Aerated - Component Library

## Installation

```bash
npm install --save @aerian-studios/aerated@0.0.1
# or
yarn add @aerian-studios/aerated@0.0.1
```

## Usage

## Form

The `Form` component is an implementation of `react-hook-form`. 
The component has 2 required props `onSubmitFn` and `validationSchema`.

- onSubmitFn:
  - Is called when the form is submitted and passed data from the form. Data is passed to the function as an object where each key is the `name` of the form elements that are passed as children to `Form` (see adding children)
- validationSchema:
  - Uses the `yup` schema builder library to validate inputs to the form. `yup` needs to be installed and imported separately. The schema can be passed to `Form` as a plain object, as it is wrapped internally with `yup.object().shape()`

## Full example

```tsx
import { 
    Form, 
    FormContents, 
    FormControls, 
    FormInput, 
    FormInputGroup, 
    FormSelect 
} from 'aerated';
import * as yup from 'yup';

const validationSchema = {
    email: yup.string().email().required()
}

const FormComponent = () => {
    const submitHandler = (data) => {
        // do something with the data returned from the form
        // data is passed to onSubmitFn with the names of 
        // each input as the key e.g.:

        /* 
            {
                email: "someemail@email.com,
                types_of_fish: "pike",
                peoples_name: ["jon", "amy"],
                types_of_cheese: "cheddar
            }
        */
    }

    return (
        <Form onSubmitFn={submitHandler} validationSchema={validationSchema}>
            <FormContents>
                <FormInput label="Name" name="email" type="email" />

                <FormInputGroup
                    name="types_of_fish"
                    label="Types of fish"
                    inputs={[
                    {
                        label: "Salmon",
                        value: "salmon",
                        defaultChecked: true,
                    },
                    {
                        label: "Pike",
                        value: "pike",
                    },
                    ]}
                />

                <FormInputGroup
                    name="peoples_names"
                    label="People's Names"
                    type="checkbox"
                    inputs={[
                    {
                        label: "Jon",
                        value: "jon",
                        defaultChecked: true,
                    },
                    {
                        label: "Amy",
                        value: "amy",
                    },
                    {
                        label: "Carol",
                        value: "carol",
                    },
                    ]}
                />

                <FormSelect
                    name="types_of_cheese"
                    label="Types of cheese"
                    options={[
                    { label: "Cheddar", value: "cheddar" },
                    { label: "Gouda", value: "gouda" },
                    { label: "Brie", value: "brie" },
                    ]}
                />
            </FormContents>

            <FormControls />
        </Form>
    );
}

export default FormComponent;
```

## Form Element

```tsx
import { Form } from 'aerated';

const FormComponent = () => {
    return (
        <Form onSubmitFn={() => {}} validationSchema={{}}>
        </Form>
    );
}

export default FormComponent;
```

### Props

| Name             | Type                                                     | Default   |
| :--------------- | :------------------------------------------------------- | :-------- |
| onSubmitFn       | `(data: Record<string, string &#124; string[]>) => void` | undefined |
| validationSchema | `Record<string, YupTypes>`                               | undefined |
| onResetFn?       | `() => void`                                             | undefined |

## Developing the component library

There are generators to quickly output the files and boilerplate that you need to output a component:

```bash
yarn generate

# or npm

npm run generate
```

All components should have tests, a story, some local theming. Largely speaking the development and documentation of a component occurs in storybooks. This encourages thinking about the the component in isolation.

### Developing locally 

<hr />

The repository contains storybooks for building and testing new components. To add components to the library use the following steps:

Clone this repository:

```bash
https://github.com/matt-hardman/aerated.git
```

Install dependencies:

```bash
yarn
```

Run:

```bash
yarn storybook
```

Then create a component and relevant story within the `src` folder.

## Linking a local version of aerated to another project
<hr />

Based on: [this article](https://medium.com/@mtfranchetto/the-solution-for-a-working-npm-yarn-link-ddcb4f3c785e)

Sometimes it is useful to link a local version of a library to another react project, to ensure everything is working correctly, before publishing an update to the npm directory.

Using `npm link` or `yarn link` can cause problems as the whole project is linked and multiple versions of react are detected.

To solve this problem `yalc` can be used.

```bash
yarn global add yalc
```

Once yalc is installed running `yarn npm-publish:local` will build the library as if it was being published to npm, but store it locally.

Next go to the react project you want to install the local version of `aerated` and run `yalc add aerated`.  
