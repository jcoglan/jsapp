require 'sinatra'

get '/signup' do
  erb :signup
end

post '/accounts/create' do
  'You are a wizard, Harry!'
end

