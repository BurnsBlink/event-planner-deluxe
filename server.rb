require "csv"
require "json"
require "pry"
require "sinatra"
require "sinatra/json"

set :bind, "0.0.0.0"
set :public_folder, File.join(File.dirname(__FILE__), "public")

get "/" do
  erb :page
end

get "/registrants.json" do
  csv = CSV.read("public/registrations.csv", { headers: true })
  data = Hash.new
  data["registrants"] = []
  csv.each do |row|
    data["registrants"] << row.to_hash
  end
  json data
end

post "/registrations.json" do
  registration = JSON.parse(request.body.read)
  CSV.open("public/registrations.csv", "a+") do |csv|
    csv << [registration["firstName"], registration["lastName"], registration["email"]]
  end
  json accepted: true
end
