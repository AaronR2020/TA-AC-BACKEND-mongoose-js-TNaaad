writeCode

Answer below questions

- do not mutate previous schema unless specified
- create a new schema for each question

Q. create an express server [done]

- use mongoose to connect to mongodb database  [done]

Q. Create an article Schema with fields [done]

- title -> String
- description -> String
- tags -> [String]
- createdAt -> Date, defaults to current date
- likes -> Number, defaults to zero

Q. create a user schema with following fields and type [done]
1.name -> string
2.email -> string
3.age -> number

Q. update user schema to make email lowercase and default age to be 0.[done]

Q. Update user schema[done]

- contains password field with minimum 5 characters
- add createdAt field of type date and default it to current date.[done]

Q. Add address Schema with fields[done]

- village -> String
- city -> String
- state -> String
- pin -> number
- user -> ObjectId of User from user schema

Q. Update address schema to contain required validators for state and city field.[done]

Q. Add favourites in user schema of type array of strings.[done]

Q. Add timestamps to user and address schema.[done]

Q. create model for users schema created above and export it.[done]

Q. create model for article schema created above and export it.[done]

Q. create model for address schema created above and export it.[done]
