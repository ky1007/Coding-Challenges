json.set! user.id do
  json.extract! user, :id, :first_name, :last_name, :email, :zip_code, :coding_test, :admitted
end