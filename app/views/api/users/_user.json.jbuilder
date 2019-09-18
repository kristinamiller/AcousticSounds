json.extract! user, :id, :email, :display_name, :first_name, :last_name, :city, :country, :bio

json.imageURL url_for(user.photo)