# This is an Open Source Project, I really need your help.

![Website Wireframe Design.jpg](Website%20Wireframe%20Design.jpg)
#### Top destination cards data.
here we mention how card data comes from the data base.
##### format 
```typescript
// object type:
type cardObject = {
    Image: string;
    heading: string;
    location: string;
    category: string;
    id: bigint;
}
```
# Demo users 
```typescript
[
    {
        "fullName": "Biswajit Das",
        "username": "v234rt",
        "password": "12345678",
        "email": "Test345@gmail.com"
    },
    {
        "fullName": "Ankit Sharma",
        "username": "a234sh",
        "password": "12345678",
        "email": "Test346@gmail.com"
    },
    {
        "fullName": "Sneha Gupta",
        "username": "s234gu",
        "password": "12345678",
        "email": "Test347@gmail.com"
    },
    {
        "fullName": "Rohan Kumar",
        "username": "r234ku",
        "password": "12345678",
        "email": "Test348@gmail.com"
    },
    {
        "fullName": "Priya Verma",
        "username": "p234ve",
        "password": "12345678",
        "email": "Test349@gmail.com"
    },
    {
        "fullName": "Amit Roy",
        "username": "a234ro",
        "password": "12345678",
        "email": "Test350@gmail.com"
    },
    {
        "fullName": "Nidhi Agarwal",
        "username": "n234ag",
        "password": "12345678",
        "email": "Test351@gmail.com"
    },
    {
        "fullName": "Karan Mehta",
        "username": "k234me",
        "password": "12345678",
        "email": "Test352@gmail.com"
    },
    {
        "fullName": "Pooja Singh",
        "username": "p234si",
        "password": "12345678",
        "email": "Test353@gmail.com"
    },
    {
        "fullName": "Vivek Jain",
        "username": "v234ja",
        "password": "12345678",
        "email": "Test354@gmail.com"
    }
]

```
# Demo subscriber data

```typescript
[
  {
    "_id": {
      "$oid": "67664c735141e2196128b446"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b427"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:15:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:15:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b447"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b428"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:16:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:16:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b448"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b429"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:17:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:17:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b449"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b430"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:18:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:18:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b450"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b431"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:19:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:19:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b451"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b432"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:20:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:20:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b452"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b433"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:21:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:21:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b453"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b434"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:22:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:22:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b454"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b435"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:23:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:23:22.000Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67664c735141e2196128b455"
    },
    "followers": {
      "$oid": "676645dd5141e2196128b436"
    },
    "following": {
      "$oid": "676645a45141e2196128b421"
    },
    "createdAt": {
      "$date": "2024-12-21T06:24:22.000Z"
    },
    "updatedAt": {
      "$date": "2024-12-21T06:24:22.000Z"
    },
    "__v": 0
  }
]

```