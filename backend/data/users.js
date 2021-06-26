import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync("123456",10),
        isAdmin: true
    },
    {
        name: 'Aroon Kumar',
        email: 'arun@example.com',
        password: bcrypt.hashSync("123456",10)
    },
    {
        name: 'Hinesh Kumar',
        email: 'hinesh@example.com',
        password: bcrypt.hashSync("123456",10)
    },
    {
        name: 'Laksh',
        email: 'laksh@example.com',
        password: bcrypt.hashSync("123456",10)
    }
]

export default users