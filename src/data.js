// Form Input Data
export const inputData = [
   
    {
        id: 1,
        type: 'text',
        name: 'email',
        placeholder: 'Enter Login ID',
        required: true,
        errMsg: 'Looks like this is not an Login Id',
        pattern: '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$'
    },
    {
        id: 2,
        type: 'password',
        label: 'password',
        name: 'password',
        placeholder: 'Enter Password',
        required: true,
        errMsg: 'Password should be 8-20 characters',
        pattern: "^[A-Za-z0-9!@#$%^&*]{8,20}$"
    },
]