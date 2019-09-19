
@comment.each do |comment|
  json.set! comment[:id] do
    json.extract! comment, :id, :body, :user_id, :track_id
  end

end