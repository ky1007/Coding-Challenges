# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_types = UserType.create([
  {
    user_type: 'applicant',
  },
  {
    user_type: 'administrator',
  }
])

users = User.create([
  {
    first_name: "Anna",
    last_name: "Wintour",
    email: "awin@gmail.com",
    zip_code: "94052",
    coding_test: "NA",
    user_type_id: 1,
  },
  {
    first_name: "Chuck",
    last_name: "Brassley",
    email: "cbass@outlook.com",
    zip_code: "19305",
    coding_test: "Ruby code",
    user_type_id: 1,
  },
  {
    first_name: "Zeus",
    last_name: "Amaden",
    email: "amaden@aol.com",
    zip_code: "84932",
    coding_test: "JavaScript code",
    user_type_id: 1,
  }
])