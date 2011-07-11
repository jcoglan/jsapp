require 'sinatra'

get '/signup' do
  erb :signup
end

post '/accounts/create' do
  if params[:username] == 'Wizard'
    'Your argument is invalid'
  elsif params[:username] != 'Harry'
    'Your name is invalid'
  elsif params[:email] !~ /@/
    'Your email is invalid'
  else
    'You are a wizard, Harry!'
  end
end

