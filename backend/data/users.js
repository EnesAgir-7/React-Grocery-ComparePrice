import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@abc.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Vivek Sengar',
    email: 'vivek@abc.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Enes',
    email: 'enes@abc.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
