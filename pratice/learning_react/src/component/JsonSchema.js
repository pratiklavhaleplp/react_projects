import React from "react";
import Form from 'react-jsonschema-form'

const JsonSchema = (schema) => {
    return <Form schema={schema} />
}

export default JsonSchema;