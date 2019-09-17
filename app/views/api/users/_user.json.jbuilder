json.extract! user, :id, :email, :display_name

json.imageURL url_for(user.photo)